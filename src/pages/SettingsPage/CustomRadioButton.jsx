import React, { useState } from 'react';
import {
    LabelWithRadio,
    RadioInput,
    RadioMark,
    UncheckedRadioInput,
    UncheckedRadioMark,
    UncheckedLabelWithRadio,
  } from './CustomRadioButton.styled';
 
  
  const CustomRadioButton = ({ name, value, selectedValue, text }) => {


    return (
      <>
      <LabelWithRadio>
        <RadioInput
          type="radio"
          name={name}
          value={value}
          checked={selectedValue === value}
        />
        <RadioMark />
        {text}
      </LabelWithRadio>
      <UncheckedLabelWithRadio>
        <UncheckedRadioInput
          type="radio"
          name={name}
          value={value}
          checked={selectedValue !== value}
        />
        <UncheckedRadioMark />
      </UncheckedLabelWithRadio>
    </>
    );
  };
  
  export default CustomRadioButton;