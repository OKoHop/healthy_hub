import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import validationSchema from './validationSchema';
import { forgotPassword } from '../../redux/auth/operations';
import { selectError, selectSuccess } from '../../redux/auth/selectors';
import FormInput from '../Auth/AuthFormInput/FormInput';
import {
  AuthQuestion,
  Content,
  ErrorBlock,
  StyledLink,
  Subtitle,
  SuccessBlock,
  Title,
} from '../../pages/SignUpPage/SignUpPage.styled';
import WelcomeAuthWrapper from '../WelcomeAuthWrapper';
import { SubmitButton } from '../SignIn/SignIn.styled';
import { FormBlock } from './ForgotPassword.styled';

const ForgotPasswordForm = () => {
  const inputFields = [{ name: 'email', placeholder: 'E-mail', type: 'text' }];
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const success = useSelector(selectSuccess);

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: validationSchema(),
    onSubmit: (values) => {
      try {
        dispatch(forgotPassword(values));
      } catch (error) {
        console.log(error);
      }
    },
  });

  const innerContent = (
    <Content>
      <Title>Forgot your password</Title>
      <Subtitle>We will send you an email with recovery instructions</Subtitle>
      <FormBlock onSubmit={formik.handleSubmit}>
        {inputFields.map((field) => (
          <FormInput
            key={field.name}
            formik={formik}
            id={field.name.toLowerCase()}
            type={field.type}
            placeholder={field.placeholder}
            label={field.label}
            onBlur={() => formik.handleBlur({ target: { name: field.name } })}
            showError={true}
          />
        ))}

        <SubmitButton type="submit">Send</SubmitButton>
      </FormBlock>
      <AuthQuestion>
        <p> If you don't have an account yet </p>
        <StyledLink to="/signup">Sign up</StyledLink>
      </AuthQuestion>
    </Content>
  );

  return (
    <div className="container">
      {error && error.type === 'forgot' && (
        <ErrorBlock>
          User with the provided email does not exist. Please enter a valid
          email or{' '}
          <StyledLink to="/signup" type="error">
            register
          </StyledLink>{' '}
          for a new account.
        </ErrorBlock>
      )}
      {success && (
        <SuccessBlock>
          We have successfully sent an email with a new password to your
          address.
        </SuccessBlock>
      )}
      <WelcomeAuthWrapper>{innerContent}</WelcomeAuthWrapper>
    </div>
  );
};

export default ForgotPasswordForm;
