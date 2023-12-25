import React, { useState } from 'react';
import {
    LabelWithRadio,
    RadioInput,
    RadioMark,
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
      </>
    );
  };
  
  export default CustomRadioButton;