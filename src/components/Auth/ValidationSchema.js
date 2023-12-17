import * as Yup from 'yup';

const validationSchema = (currentStep) => {
  return Yup.object({
    name: Yup.string().required('Required field'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required field'),
    password: Yup.string().min(8).required('Required field'),
    age:
      currentStep === 2
        ? Yup.number().required('Required field')
        : Yup.number(),
    weight:
      currentStep === 3
        ? Yup.number().required('Required field')
        : Yup.number(),
    height:
      currentStep === 3
        ? Yup.number().required('Required field')
        : Yup.number(),
  });
};

export default validationSchema;
