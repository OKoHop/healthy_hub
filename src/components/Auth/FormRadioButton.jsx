import styled from 'styled-components';

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  @media (${(p) => p.theme.mq.tablet}) {
  }
  @media (${(p) => p.theme.mq.desktop}) {
  }
`;

const StyledInput = styled.input`
  appearance: none;
  margin: 0;
  width: 12px;
  height: 12px;
  border: 1px solid #b6b6b6;
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
    background-color: #e3ffa8;
  }
  &:hover {
    border: 1px solid #e3ffa8;
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
