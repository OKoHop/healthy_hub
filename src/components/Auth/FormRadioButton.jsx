import styled from 'styled-components';

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.primaryWhite};
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
`;

const StyledInput = styled.input`
  appearance: none;
  margin: 0;
  width: 12px;
  height: 12px;
  border: 1px solid ${(p) => p.theme.colors.primaryGray};
  border-radius: 50%;
  margin-right: 8px;
  transition: ${(p) => p.theme.transition.customTrans};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    margin: 2px;
    transition: ${(p) => p.theme.transition.customTrans};
  }
  &:checked::after {
    background-color: ${(p) => p.theme.colors.primaryGreenLite};
  }
  &:hover {
    border: 1px solid ${(p) => p.theme.colors.primaryGreenLite};
  }
  &:focus {
    outline: none;
  }
`;

const FormRadioButton = ({ name, value, onChange, onBlur, checked, label }) => (
  <>
    <StyledLabel>
      <StyledInput
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        checked={checked}
      />
      {label}
    </StyledLabel>
  </>
);

export default FormRadioButton;
