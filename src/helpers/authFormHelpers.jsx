import { StyledRadioGroup } from '../components/Auth/AuthForm/AuthForm.styled';
import FormInput from '../components/Auth/AuthFormInput/FormInput';
import FormRadioButton from '../components/Auth/FormRadioButton';

export const renderRadioButtons = (name, values, formik, row = false) => (
  <StyledRadioGroup row={row}>
    {values.map((value, index) => (
      <FormRadioButton
        key={index}
        name={name}
        value={value.toLowerCase()}
        onChange={formik.handleChange}
        onBlur={() => formik.handleBlur({ target: { name } })}
        checked={
          typeof formik.values[name] === 'string' &&
          formik.values[name].toLowerCase() === value.toLowerCase()
        }
        label={value}
      />
    ))}
  </StyledRadioGroup>
);

export const renderInputs = (fields, formik, setSubmitted = false) =>
  fields.map(({ name, typeInput, label, placeholder }) => (
    <div key={name}>
      <FormInput
        formik={formik}
        id={name.toLowerCase()}
        type={typeInput}
        placeholder={placeholder}
        label={label}
        onBlur={() => formik.handleBlur({ target: { name } })}
        showError={() => setSubmitted(true)}
      />
    </div>
  ));

export const modifyActivityValue = (originalActivity) => {
  const numericValue = parseFloat(originalActivity);
  return isNaN(numericValue) ? 0 : numericValue;
};
