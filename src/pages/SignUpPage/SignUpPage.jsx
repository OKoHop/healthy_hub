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

const SignUpPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState(null);
  const handleSetCurrentStep = (step) => {
    setCurrentStep(step);
    setError(null);
  };

  const onError = (errorMessage) => {
    console.error('Error:', errorMessage);
    setError(errorMessage);
  };

  const issigninvisible = currentStep === 0;

  const currentPageData = signUpPageData[currentStep];

  return (
    <div className="container">
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
          {error && <ErrorBlock style={{ color: 'red' }}>{error}</ErrorBlock>}
          <Title>{currentPageData?.info.title}</Title>
          <Subtitle>{currentPageData?.info.text}</Subtitle>
          <FormBlock issigninvisible={issigninvisible}>
            <MultiStepRegisterForm
              onError={onError}
              currentStep={currentStep}
              setCurrentStep={handleSetCurrentStep}
            />
          </FormBlock>

          {issigninvisible && (
            <SigInQuestion>
              <p>Do you already have an account?</p>
              <StyledLink to="/signin">Sign in</StyledLink>
            </SigInQuestion>
          )}
        </Info>
      </SignUpPageContainer>
    </div>
  );
};

export default SignUpPage;
