import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';

import FormInput from '../FormInput';
import FormRadioButton from '../FormRadioButton';

import { register } from '../../../redux/auth/operations';
import { inputFields, radioData } from '../constants';
import validationSchema from '../ValidationSchema';

const MultiStepFormCombined = () => {
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(0);
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

  const formik = useFormik({
    initialValues: data,
    validationSchema: validationSchema(currentStep),
    onSubmit: (values) => {
      if (currentStep === 4) {
        values.activity = modifyActivityValue(values.activity);

        try {
          dispatch(register(values));
        } catch (error) {
          console.error('Registration failed:', error.message);
        }
      } else {
        setCurrentStep((prev) => prev + 1);
        setData((prev) => ({ ...prev, ...values }));
      }
    },
  });

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const renderRadioButtons = (name, values) => (
    <div>
      {values.map((value, index) => (
        <FormRadioButton
          key={index}
          name={name}
          value={value}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values[name] === value}
          label={value}
        />
      ))}
    </div>
  );

  const renderInputs = (fields) =>
    fields.map(({ name, typeInput, label }) => (
      <div key={name}>
        <FormInput
          formik={formik}
          id={name.toLowerCase()}
          type={typeInput}
          placeholder={name}
          label={label}
        />
      </div>
    ));

  const modifyActivityValue = (originalActivity) => {
    const numericValue = parseFloat(originalActivity);
    return isNaN(numericValue) ? 0 : numericValue;
  };

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
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
          <>{renderRadioButtons('activity', radioData.activity)}</>
        )}

        <div>
          {currentStep > 0 && (
            <button type="button" onClick={handlePrevStep}>
              Back
            </button>
          )}
          <button type="submit">{currentStep === 4 ? 'Submit' : 'Next'}</button>
        </div>
      </form>
    </div>
  );
};

export default MultiStepFormCombined;
