import styled from 'styled-components';
import { Field } from 'formik';

export const RadioMark = styled.span`
  margin-right: 10px;
  min-width: 12px;
  height: 12px;
  border: 1px solid rgba(182, 182, 182, 1);
  border-radius: 50%;
  position: relative;

  &:before {
    content: '';
    width: 6px;
    height: 6px;
    background-color: ${(p) => p.theme.colors.primaryGreenLite};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }

  input:checked + & {
    &:before {
      display: block;
    }
  }
`;

export const RadioInput = styled(Field)`
  appearance: none;

  &:checked + ${RadioMark} {
    &:before {
      display: block;
    }
  }
`;

export const LabelWithRadio = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover > ${RadioMark} {
    border-color: ${(p) => p.theme.colors.primaryGreenLite};
  }
`;
