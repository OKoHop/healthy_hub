import { useState } from 'react';

import { ReactComponent as ClosedEye } from '../../../images/signupIcons/eye-closed.svg';
import { ReactComponent as OpenedEye } from '../../../images/signupIcons/eye-opened.svg';

import {
  CorrectMessage,
  ErrorText,
  FormInputBlock,
  InputBlock,
  StyledCorrectIcon,
  StyledFormInput,
  StyledHideShowButton,
  StyledHideShowButtonWithError,
  StyledHideShowButtonWithVisibility,
  StyledIncorrectIcon,
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
    <FormInputBlock>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      <InputBlock>
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
          $showValidEffect={showValidEffect}
        />
        {showValidEffect && !hasError && (
          <StyledCorrectIcon $isVisible={true} />
        )}
        {!hasError && showValidEffect && (
          <CorrectMessage>Now field is correct</CorrectMessage>
        )}
        {isPassword && (
          <>
            {hasError && <StyledHideShowButtonWithError />}
            {showValidEffect && <StyledHideShowButtonWithVisibility />}

            <StyledHideShowButton
              $hasIcons={hasError || showValidEffect}
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? <OpenedEye /> : <ClosedEye />}
            </StyledHideShowButton>
          </>
        )}
        {showError && hasError && <StyledIncorrectIcon $isVisible={true} />}
      </InputBlock>

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
    </FormInputBlock>
  );
};

export default FormInput;
