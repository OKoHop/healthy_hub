import React from 'react';

const FormRadioButton = ({ name, value, onChange, onBlur, checked, label }) => (
  <div>
    <label>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        checked={checked}
      />
      {label}
    </label>
  </div>
);

export default FormRadioButton;
