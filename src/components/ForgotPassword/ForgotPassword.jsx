import { useDispatch, useSelector } from 'react-redux';
import SportAndFitnessTrackerIMG from './../../images/Illustrations/Welcome/sport_fit_tracker_desk@1x.png';
import { useFormik } from 'formik';

import validationSchema from './validationSchema';
import { forgotPassword } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';

import css from './ForgotPassword.module.css';
import { selectError } from '../../redux/auth/selectors';
import FormInput from '../Auth/AuthFormInput/FormInput';

const ForgotPasswordForm = () => {
  const inputFields = [{ name: 'email', placeholder: 'E-mail', type: 'text' }];
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: validationSchema(),
    onSubmit: (values) => {
      try {
        dispatch(forgotPassword(values));
      } catch (error) {
        console.error('Something was wrong:', error.message);
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
          <h1 className={css.title}>Forgot your password</h1>
          <h2 className={css.subtitle}>
            We will send you an email with recovery instructions
          </h2>
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
              Send
            </button>
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

export default ForgotPasswordForm;
