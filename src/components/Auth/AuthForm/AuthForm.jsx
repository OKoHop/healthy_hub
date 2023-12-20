import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../redux/auth/operations';

import { InputsBlock, ButtonsBlock } from './AuthForm.styled';
import { inputFields, radioData } from '../constants';
import validationSchema from '../ValidationSchema';

import SubmitNextButton from '../SubmitNextButton';
import { BackButtonStyled } from '../BackButton';
import { selectError } from '../../../redux/auth/selectors';
import {
  modifyActivityValue,
  renderInputs,
  renderRadioButtons,
} from '../../../helpers/authFormHelpers';

const MultiPageRegisterForm = ({ currentStep, setCurrentStep, onError }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectErrorFromStore = useSelector(selectError);

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    goal: radioData.goal[0].toLowerCase(),
    gender: radioData.gender[0].toLowerCase(),
    age: '',
    weight: '',
    height: '',
    activity: radioData.activity[0].toLowerCase(),
  });

  const formikConfig = {
    initialValues: data,
    validationSchema: validationSchema(currentStep),
    onSubmit: async (values) => {
      if (currentStep === 4) {
        const originalActivity = formik.values['activity'];
        values.activity = modifyActivityValue(values.activity);

        try {
          const registrationResult = await dispatch(register(values));

          if (register.fulfilled.match(registrationResult)) {
            navigate('/signin');
          } else {
            values.activity = originalActivity;
          }
        } catch (error) {
          const errorMessage =
            selectErrorFromStore || 'An unexpected error occurred.';
          onError(errorMessage);
        }
      } else {
        setCurrentStep((prev) => prev + 1);
        setData((prev) => ({ ...prev, ...values }));
      }
    },
  };

  if (currentStep === 2 || currentStep === 3) {
    formikConfig.validateOnChange = false;
    formikConfig.validateOnBlur = false;
  }

  const formik = useFormik(formikConfig);

  useEffect(() => {
    if (selectErrorFromStore) {
      onError(selectErrorFromStore);
    }
  }, [selectErrorFromStore, onError]);

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputsBlock hasbackbutton={currentStep > 0}>
        {currentStep === 0 && <>{renderInputs(inputFields.main, formik)}</>}
        {currentStep === 1 && (
          <>{renderRadioButtons('goal', radioData.goal, formik)}</>
        )}

        {currentStep === 2 && (
          <>
            {renderRadioButtons('gender', radioData.gender, formik)}
            {renderInputs(inputFields.age, formik)}
          </>
        )}
        {currentStep === 3 && (
          <>{renderInputs(inputFields.parameters, formik)}</>
        )}
        {currentStep === 4 && (
          <>
            {renderRadioButtons('activity', radioData.activity, formik, true)}
          </>
        )}
      </InputsBlock>

      <ButtonsBlock>
        <SubmitNextButton
          type="submit"
          btnName={currentStep === 4 ? 'Submit' : 'Next'}
        >
          {currentStep === 4 ? 'Submit' : 'Next'}
        </SubmitNextButton>
        {currentStep > 0 && (
          <BackButtonStyled type="button" onClick={handlePrevStep}>
            Back
          </BackButtonStyled>
        )}
      </ButtonsBlock>
    </form>
  );
};

export default MultiPageRegisterForm;
