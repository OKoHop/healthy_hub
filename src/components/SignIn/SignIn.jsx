import { useDispatch, useSelector } from 'react-redux';
import SportAndFitnessTrackerIMG from './../../images/Illustrations/Welcome/sport_fit_tracker_desk@1x.png';
import { useFormik } from 'formik';
import FormInput from '../Auth/AuthFormInput/FormInput';
import validationSchema from './validationSchema';
import { logIn } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';

import css from './SignIn.module.css';
import { selectError } from '../../redux/auth/selectors';

const SignInForm = () => {
  const error = useSelector(selectError);
  const inputFields = [
    { name: 'email', placeholder: 'E-mail', type: 'text' },
    {
      name: 'password',
      placeholder: 'Password',
      type: 'password',
    },
  ];
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: validationSchema(),
    onSubmit: (values) => {
      try {
        dispatch(logIn(values));
      } catch (error) {
        console.error('Registration failed:', error.message);
      }
    },
  });

  return (
    <div className="container">
      <div className={css.wrapper}>
        <img
          className={css.img}
          src={SportAndFitnessTrackerIMG}
          alt="illustration-sport-and-fitness-tracker"
        />
        <div className={css.content}>
          <h1 className={css.title}>Sign in</h1>
          <h2 className={css.subtitle}>You need to login to use the service</h2>
          <form className={css.form} onSubmit={formik.handleSubmit}>
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
            {error && <div className={css.error}>{error}</div>}
            <button className={css.signinBtn} type="submit">
              Sign in
            </button>
            <Link className={css.forgotPassword} to={'/forgot-password'}>
              Forgot your password?
            </Link>
          </form>
          <div className={css.questionTrumb}>
            <p className={css.question}> If you don't have an account yet? </p>
            <Link className={css.signupBtn} to="/signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
