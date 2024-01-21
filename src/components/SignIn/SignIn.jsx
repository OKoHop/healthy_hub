import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import FormInput from '../Auth/AuthFormInput/FormInput';
import validationSchema from './validationSchema';
import { logIn } from '../../redux/auth/operations';
import { selectError } from '../../redux/auth/selectors';

import useAuthResetError from '../../hooks/useAuthResetError';
import {
  Content,
  ErrorBlock,
  AuthQuestion,
  StyledLink,
  Subtitle,
  Title,
} from '../../pages/SignUpPage/SignUpPage.styled';
import WelcomeAuthWrapper from '../../components/WelcomeAuthWrapper';
import { SubmitButton, ForgotPasswordLink, FormBlock } from './SignIn.styled';
import { useState } from 'react';
import LoaderWithBackdrop from '../LoaderSpinner';

const SignInForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const error = useSelector(selectError);
  const inputFields = [
    { name: 'email', placeholder: 'E-mail', type: 'text' },
    {
      name: 'password',
      placeholder: 'Password',
      type: 'password',
    },
  ];
  const { resetAuthError } = useAuthResetError();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: validationSchema(),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await dispatch(logIn(values));
        setLoading(false);
      } catch (error) {
        console.error('Registration failed:', error.message);
      }
    },
  });

  return (
    <div className="container">
      {loading && <LoaderWithBackdrop />}
      {error && error.type === 'login' && (
        <ErrorBlock>
          The email or password you entered is incorrect. Please review your
          information and attempt to log in again.
        </ErrorBlock>
      )}
      <WelcomeAuthWrapper>
        <Content>
          <Title>Sign in</Title>
          <Subtitle>You need to login to use the service</Subtitle>
          <FormBlock onSubmit={formik.handleSubmit}>
            {inputFields.map((field) => (
              <FormInput
                key={field.name}
                formik={formik}
                id={field.name.toLowerCase()}
                type={field.type}
                placeholder={field.placeholder}
                label={field.label}
                onBlur={() =>
                  formik.handleBlur({ target: { name: field.name } })
                }
                showError={true}
              />
            ))}

            <SubmitButton type="submit">Sign in</SubmitButton>
            <ForgotPasswordLink
              to={'/forgot-password'}
              onClick={resetAuthError}
            >
              Forgot your password?
            </ForgotPasswordLink>
          </FormBlock>

          <AuthQuestion>
            <p>If you don't have an account yet</p>
            <StyledLink to="/signup" onClick={resetAuthError}>
              Sign up
            </StyledLink>
          </AuthQuestion>
        </Content>
      </WelcomeAuthWrapper>
    </div>
  );
};

export default SignInForm;
