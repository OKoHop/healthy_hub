import { useEffect, useState } from 'react';
import { useFormik } from 'formik';

import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../redux/auth/operations';

import { InputsBlock, ButtonsBlock, GenderLabel } from './AuthForm.styled';
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
import LoaderWithBackdrop from '../../LoaderSpinner';

const MultiPageRegisterForm = ({ currentStep, setCurrentStep, onError }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
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
        setLoading(true);
        const originalActivity = formik.values['activity'];
        values.activity = modifyActivityValue(values.activity);

        try {
          await dispatch(register(values));
          values.activity = originalActivity;
          setLoading(false);
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
      {loading && <LoaderWithBackdrop />}
      <InputsBlock $hasBackButton={currentStep > 0}>
        {currentStep === 0 && <>{renderInputs(inputFields.main, formik)}</>}
        {currentStep === 1 && (
          <>{renderRadioButtons('goal', radioData.goal, formik)}</>
        )}

        {currentStep === 2 && (
          <>
            <GenderLabel>Gender</GenderLabel>
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
        />

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
