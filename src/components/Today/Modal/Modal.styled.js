import styled from 'styled-components';
import Modal from 'react-modal';
import { sharedButtonStyles } from '../../Buttons/Buttons.styled';

export const H1 = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 24px;

  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;

export const Form = styled.form`
  @media (min-width: 834px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 276px;
  max-width: 100%;
  height: 34px;
  border: 1px solid ${(p) => p.theme.colors.primaryGreenLite};
  border-radius: 12px;
  padding: 8px 10px;
  background-color: #0f0f0f;
  color: #b6b6b6;
  transition: ${(p) => p.theme.transition.customTrans};
  outline: none;
  cursor: pointer;
  &::placeholder {
    color: #b6b6b6;
  }
  &:hover,
  &:focus {
    border: 1px solid ${(p) => p.theme.colors.primaryWhite};
  }
  @media (min-width: 834px) {
    width: 212px;
    height: 36px;
    margin-left: auto;
    margin-right: auto;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Label = styled.label`
  margin-bottom: 32px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;

  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 834px) {
    text-align: center;
  }
`;

export const FormBtn = styled.button`
  width: 276px;
  height: 36px;
  border: 1px solid ${(p) => p.theme.colors.primaryGreenLite};
  border-radius: 12px;
  background: ${(p) => p.theme.colors.primaryGreenLite};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  font-size: 14px;
  @media (min-width: 834px) {
    width: 212px;
    height: 36px;
  }

  &:hover {
    background-color: transparent;
    border: 1px solid ${(p) => p.theme.colors.primaryGreenLite};
    color: ${(p) => p.theme.colors.primaryWhite};
  }
`;

export const CancelBtn = styled.button`
  ${sharedButtonStyles}
  display: block;
  color: ${(p) => p.theme.colors.primaryGray};
  border: 1px solid transparent;
  background-color: transparent;
  width: 100px;
  margin-top: 16px;
  margin-inline: auto;
  &:hover {
    border-color: ${(p) => p.theme.colors.primaryGreenLite};
    width: 100%;
    @media (min-width: 834px) {
      width: 212px;
    }
  }
`;

export const ModalWindow = styled(Modal)`
  width: 300px;
  height: 266px;
  border: inherit;
  border-radius: 12px;
  padding: 16px 12px 24px;
  background-color: #0f0f0f;

  position: absolute;
  top: 30%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  @media (min-width: 834px) {
    width: 338px;
    height: 280px;
    padding: 24px 40px;
  }
`;
