import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../redux/auth/operations';

import { InputsBlock, ButtonsBlock, StyledRadioGroup } from './AuthForm.styled';
import { inputFields, radioData } from '../constants';
import validationSchema from '../ValidationSchema';

import FormInput from '../FormInput';
import FormRadioButton from '../FormRadioButton';
import SubmitNextButton from '../SubmitNextButton';
import { BackButtonStyled } from '../BackButton';

const MultiPageRegisterForm = ({ currentStep, setCurrentStep, onError }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    goal: radioData.goal[0],
    gender: radioData.gender[0],
    age: '',
    weight: '',
    height: '',
    activity: radioData.activity[0],
  });

  const formikConfig = {
    initialValues: data,
    validationSchema: validationSchema(currentStep),
    onSubmit: async (values) => {
      if (currentStep === 4) {
        values.goal = values.goal.toLowerCase();
        values.gender = values.gender.toLowerCase();
        values.activity = modifyActivityValue(values.activity);
        const registrationResult = await dispatch(register(values));

        if (register.fulfilled.match(registrationResult)) {
          navigate('/signin');
        } else {
          const errorMessage =
            registrationResult.payload?.response?.data?.message ||
            'Registration failed. Please check your information and try again.';

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

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderRadioButtons = (name, values, row = false) => (
    <StyledRadioGroup row={row}>
      {values.map((value, index) => (
        <FormRadioButton
          key={index}
          name={name}
          value={value}
          onChange={formik.handleChange}
          onBlur={() => formik.handleBlur({ target: { name } })}
          checked={formik.values[name] === value}
          label={value}
        />
      ))}
    </StyledRadioGroup>
  );

  const renderInputs = (fields) =>
    fields.map(({ name, typeInput, label, placeholder }) => (
      <div key={name}>
        <FormInput
          formik={formik}
          id={name.toLowerCase()}
          type={typeInput}
          placeholder={placeholder}
          label={label}
          onBlur={() => formik.handleBlur({ target: { name } })}
          showError={() => setSubmitted(true)}
        />
      </div>
    ));

  const modifyActivityValue = (originalActivity) => {
    const numericValue = parseFloat(originalActivity);
    return isNaN(numericValue) ? 0 : numericValue;
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputsBlock hasbackbutton={currentStep > 0}>
        {currentStep === 0 && <>{renderInputs(inputFields.main)}</>}
        {currentStep === 1 && <>{renderRadioButtons('goal', radioData.goal)}</>}

        {currentStep === 2 && (
          <>
            {renderRadioButtons('gender', radioData.gender)}
            {renderInputs(inputFields.age)}
          </>
        )}
        {currentStep === 3 && <>{renderInputs(inputFields.parameters)}</>}
        {currentStep === 4 && (
          <>{renderRadioButtons('activity', radioData.activity, true)}</>
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
