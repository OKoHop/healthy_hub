import React from 'react';
import styled, { css } from 'styled-components';

export const StyledFormInput = styled.input`
  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 10px;
  outline: none;
  border-radius: 12px;
  border: 1px solid #e3ffa8;
  background: #0f0f0f;
  ::placeholder {
    color: #b6b6b6;
  }
  ${(props) =>
    props.error &&
    css`
      border: 1px solid #e74a3b;
    `}
`;

export const ErrorText = styled.div`
  color: #e74a3b;
  font-family: Poppins;
  font-size: 12px;
  line-height: 14px;
  margin-top: 4px;
`;

const FormInput = ({ formik, label, id, type, placeholder }) => {
  const hasError = formik.touched[id] && formik.errors[id];

  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <StyledFormInput
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[id]}
        error={hasError}
      />
      {hasError && <ErrorText>{formik.errors[id]}</ErrorText>}
    </>
  );
};

export default FormInput;
