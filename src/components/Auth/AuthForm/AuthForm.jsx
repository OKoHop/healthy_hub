import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/operations';
import FormInput from '../FormInput';

const AuthForm = () => {
  const [activityLabel, setActivityLabel] = useState(
    '1.2 - if you do not have physical activity and sedentary work'
  );

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      goal: 'Lose Fat',
      gender: 'Male',
      age: '',
      weight: '',
      height: '',
      activity: '1.2',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required field'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required field'),
      password: Yup.string().min(8).required('Required field'),
      age: Yup.number().required('Required field'),
      weight: Yup.number().required('Required field'),
      height: Yup.number().required('Required field'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      try {
        dispatch(register(values));
      } catch (error) {
        console.error('Registration failed:', error.message);
      }
    },
  });

  const handleActivityChange = (event) => {
    formik.handleChange(event);
    setActivityLabel(event.target.nextSibling.nodeValue.trim());
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormInput
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        touched={formik.touched.name}
        error={formik.errors.name}
      />

      <FormInput
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        touched={formik.touched.email}
        error={formik.errors.email}
      />

      <FormInput
        id="password"
        name="password"
        type="password"
        placeholder="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        touched={formik.touched.password}
        error={formik.errors.password}
      />

      <label>
        <input
          type="radio"
          name="goal"
          value="Maintain"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.goal === 'Maintain'}
        />
        Maintain
      </label>
      <label>
        <input
          type="radio"
          name="goal"
          value="Gain Muscle"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.goal === 'Gain Muscle'}
        />
        Gain Muscle
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.gender === 'Male'}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.gender === 'Female'}
        />
        Female
      </label>

      <input
        id="age"
        name="age"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.age}
      />
      {formik.touched.age && formik.errors.age ? (
        <div>{formik.errors.age}</div>
      ) : null}

      <input
        id="height"
        name="height"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.height}
      />
      {formik.touched.height && formik.errors.height ? (
        <div>{formik.errors.height}</div>
      ) : null}
      <input
        id="weight"
        name="weight"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.weight}
      />
      {formik.touched.weight && formik.errors.weight ? (
        <div>{formik.errors.weight}</div>
      ) : null}

      <label>
        <input
          type="radio"
          name="activity"
          value="1.2"
          onChange={handleActivityChange}
          onBlur={formik.handleBlur}
          checked={formik.values.activity === '1.2'}
        />
        1.2 - if you do not have physical activity and sedentary work
      </label>
      <label>
        <input
          type="radio"
          name="activity"
          value="1.375"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.activity === '1.375'}
        />
        1.375 - if you do short runs or light gymnastics 1-3 times a week
      </label>
      <label>
        <input
          type="radio"
          name="activity"
          value="1.55"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.activity === '1.55'}
        />
        1.55 - if you play sports with average loads 3-5 times a week
      </label>
      <label>
        <input
          type="radio"
          name="activity"
          value="1.725"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.activity === '1.725'}
        />
        1.725 ​​- if you train fully 6-7 times a week
      </label>

      <label>
        <input
          type="radio"
          name="activity"
          value="1.9"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.activity === '1.9'}
        />
        1.9 - if your work is related to physical labor, you train 2 times a day
        and include strength exercises in your training program
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AuthForm;
