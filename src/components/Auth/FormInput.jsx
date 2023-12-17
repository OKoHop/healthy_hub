import React, { useState } from 'react';
import styled, { css } from 'styled-components';

export const InputBlock = styled.div`
  position: relative;
  @media (${(p) => p.theme.mq.desktop}) {
    max-width: 212px;
  }
`;

export const StyledFormInput = styled.input`
  width: 100%;
  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  line-height: 20px;
  padding: 7px 30px 7px 10px;
  outline: none;
  border-radius: 12px;
  border: 1px solid #e3ffa8;
  background: #0f0f0f;
  position: relative;
  ::placeholder {
    color: #b6b6b6;
  }
  ${(props) =>
    props.error &&
    css`
      border: 1px solid #e74a3b;
    `}
  &[type="number"] {
    -moz-appearance: textfield;
  }
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ErrorText = styled.div`
  color: #e74a3b;
  font-family: Poppins;
  font-size: 12px;
  line-height: 14px;
  margin-left: 10px;
  margin-top: 4px;
`;

export const StyledLabel = styled.label`
  display: block;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;
`;

export const StyledHideShowButton = styled.button`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const FormInput = ({ formik, label, id, type, placeholder }) => {
  const hasError = formik.touched[id] && formik.errors[id];
  const isPassword = type === 'password';
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <InputBlock>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      <StyledFormInput
        id={id}
        name={id}
        type={isPassword ? (isPasswordVisible ? 'text' : 'password') : type}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[id]}
        error={hasError}
      />
      {type === 'password' && (
        <StyledHideShowButton onClick={togglePasswordVisibility}>
          {/*  {isPasswordVisible ? 'H' : 'S'} */}
        </StyledHideShowButton>
      )}
      {hasError && <ErrorText>{formik.errors[id]}</ErrorText>}
    </InputBlock>
  );
};

export default FormInput;
