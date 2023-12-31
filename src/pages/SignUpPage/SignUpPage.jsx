import { useState } from 'react';
import MultiStepRegisterForm from '../../components/Auth/AuthForm/AuthForm';

import {
  ErrorBlock,
  FormBlock,
  Info,
  Media,
  SigInQuestion,
  SignUpPageContainer,
  StyledLink,
  Subtitle,
  Title,
} from './SignUpPage.styled';
import signUpPageData from './SignUpPageData';

import useAuthResetError from '../../hooks/useAuthResetError';

const SignUpPage = () => {
  const { resetAuthError } = useAuthResetError();
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState(null);
  const handleSetCurrentStep = (step) => {
    setCurrentStep(step);
    setError(null);
  };

  const onError = (errorMessage) => {
    setError(errorMessage);
  };

  const isSigninVisible = currentStep === 0;

  const currentPageData = signUpPageData[currentStep];

  return (
    <div className="container">
      {error && error.type === 'register' && (
        <ErrorBlock>{error.message}</ErrorBlock>
      )}
      <SignUpPageContainer>
        <Media>
          <picture>
            {currentPageData?.media.srcDesk}
            {currentPageData?.media.srcTab}
            {currentPageData?.media.srcMob}
            <img
              src={currentPageData?.media.imgSrc}
              alt={currentPageData?.media.alt}
            />
          </picture>
        </Media>

        <Info>
          <Title>{currentPageData?.info.title}</Title>
          <Subtitle>{currentPageData?.info.text}</Subtitle>
          <FormBlock $isSigninVisible={isSigninVisible}>
            <MultiStepRegisterForm
              onError={onError}
              currentStep={currentStep}
              setCurrentStep={handleSetCurrentStep}
            />
          </FormBlock>

          {isSigninVisible && (
            <SigInQuestion>
              <p>Do you already have an account?</p>
              <StyledLink to="/signin" onClick={resetAuthError}>
                Sign in
              </StyledLink>
            </SigInQuestion>
          )}
        </Info>
      </SignUpPageContainer>
    </div>
  );
};

export default SignUpPage;
