import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { inputFields, radioData } from './constants';

const AuthForm = ({ currentPage }) => {
  console.log(radioData.goal[0]);
  console.log(radioData.gender[0]);
  console.log(radioData.activity[0]);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      goal: 'Lose Fat',
      gender: radioData.gender[0],
      age: '',
      weight: '',
      height: '',
      activity: radioData.activity[0],
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required field'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required field'),
      password: Yup.string().required('Required field'),
      age: Yup.number().required('Required field'),
      weight: Yup.number().required('Required field'),
      height: Yup.number().required('Required field'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  console.log(formik.values);
  const renderRadioButtons = (name, values) => (
    <div>
      {values.map((value, index) => {
        const radioValue =
          name.toLowerCase() === 'activity'
            ? value.split(' - ')[0]
            : value.toLowerCase().replace(/\s/g, '_');

        return (
          <label key={index}>
            <input
              type="radio"
              name={name}
              value={radioValue}
              onChange={(e) => {
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              checked={formik.values[name.toLowerCase()] === radioValue}
            />
            {value}
          </label>
        );
      })}
    </div>
  );

  const renderInputs = (fields) =>
    fields.map(({ name, typeInput }) => (
      <div key={name}>
        <input
          id={name.toLowerCase()}
          name={name.toLowerCase()}
          type={
            typeInput ||
            (name.toLowerCase() === 'password' ? 'password' : 'text')
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name.toLowerCase()]}
        />
        {formik.touched[name.toLowerCase()] &&
        formik.errors[name.toLowerCase()] ? (
          <div>{formik.errors[name.toLowerCase()]}</div>
        ) : null}
      </div>
    ));

  return (
    <form onSubmit={formik.handleSubmit}>
      {currentPage === 'registrationMain' && (
        <>
          {renderInputs(inputFields.main)} <button type="button">Next</button>
        </>
      )}
      {currentPage === 'goal' && (
        <>
          {renderRadioButtons('goal', radioData.goal)}{' '}
          <button type="button">Next</button>
          <button type="button">Back</button>
        </>
      )}
      {currentPage === 'gender&age' && (
        <>
          {renderRadioButtons('gender', radioData.gender)}
          {renderInputs(inputFields.age)}
          <button type="button">Next</button>
          <button type="button">Back</button>
        </>
      )}
      {currentPage === 'bodyParameters' && (
        <>
          {renderInputs(inputFields.parameters)}{' '}
          <button type="button">Next</button>
          <button type="button">Back</button>
        </>
      )}
      {currentPage === 'activity' && (
        <>
          {renderRadioButtons('activity', radioData.activity)}
          <button type="submit">Sign Up </button>
          <button type="button">Back</button>
        </>
      )}
    </form>
  );
};

export default AuthForm;
