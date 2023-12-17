import * as Yup from 'yup';

const validationSchema = (currentStep) => {
  return Yup.object({
    name: Yup.string().required('Name is required field'),
    email: Yup.string()
      .email('Invalid email address*')
      .required('Email is required field'),
    password: Yup.string().min(8).required('Password is required field'),
    age:
      currentStep === 2
        ? Yup.number().required('Age is required field')
        : Yup.number(),
    weight:
      currentStep === 3
        ? Yup.number().required('Weight is required field')
        : Yup.number(),
    height:
      currentStep === 3
        ? Yup.number().required('Height is required field')
        : Yup.number(),
  });
};

export default validationSchema;
