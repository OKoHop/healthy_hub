import { useState } from 'react';

import { ReactComponent as ClosedEye } from '../../../images/signupIcons/eye-closed.svg';
import { ReactComponent as OpenedEye } from '../../../images/signupIcons/eye-opened.svg';

import {
  ErrorText,
  InputBlock,
  StyledFormInput,
  StyledHideShowButton,
  StyledInformationIcon,
  StyledLabel,
} from './FormInput.styled';
import Tooltip from '../Tooltip';

const FormInput = ({ formik, label, id, type, placeholder, showError }) => {
  const hasError = formik.touched[id] && formik.errors[id];
  const isPassword = type === 'password';
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showValidEffect, setShowValidEffect] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setIsPasswordVisible((prev) => !prev);
  };

  const handleFocus = () => {
    if (hasError) {
      setShowValidEffect(true);
    }
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
        onFocus={handleFocus}
        value={formik.values[id]}
        error={hasError}
        $showvalideffect={showValidEffect}
      />
      {type === 'password' && (
        <StyledHideShowButton onClick={togglePasswordVisibility}>
          {isPasswordVisible ? <OpenedEye /> : <ClosedEye />}
        </StyledHideShowButton>
      )}
      {showError && hasError && (
        <ErrorText>
          {formik.errors[id]}
          {type === 'email' && (
            <Tooltip
              text={'Should contain the "@" symbol and have the correct format'}
            >
              <StyledInformationIcon />
            </Tooltip>
          )}
        </ErrorText>
      )}
    </InputBlock>
  );
};

export default FormInput;
