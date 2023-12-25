import * as Yup from 'yup';

const validationSchema = (currentStep) => {
  return Yup.object({
    name: Yup.string().required('Name is required field'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required field'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required field'),
    age:
      currentStep === 2
        ? Yup.number()
            .required('Age is required field')
            .positive('Age must be a positive number')
            .integer('Age must be an integer')
            .min(1, 'Age must be at least 12 years old')
            .max(150, 'Age must be at most 150 years old')
        : Yup.number(),
    weight:
      currentStep === 3
        ? Yup.number()
            .required('Weight is required field')
            .positive('Weight must be a positive number')
            .min(5, 'Weight must be at least 30')
            .max(400, 'Weight must be at most 500')
        : Yup.number(),
    height:
      currentStep === 3
        ? Yup.number()
            .required('Height is required field')
            .positive('Height must be a positive number')
            .min(50, 'Height must be at least 60')
            .max(300, 'Height must be at most 300')
        : Yup.number(),
  });
};

export default validationSchema;
