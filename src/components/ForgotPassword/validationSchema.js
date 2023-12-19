import * as Yup from 'yup';

const validationSchema = () => {
  return Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Required field'),
  });
};

export default validationSchema;
