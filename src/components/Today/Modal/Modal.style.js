import styled from 'styled-components';
import Modal from 'react-modal';

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
  height: 34px;
  border: 1px solid #e3ffa8;
  border-radius: 12px;
  padding: 8px 10px;
  background-color: #0f0f0f;
  color: #b6b6b6;

  &::placeholder {
    color: #b6b6b6;
  }

  @media (min-width: 834px) {
    width: 212px;
    height: 36px;
    margin-left: auto;
    margin-right: auto;
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
  border: inherit;
  border-radius: 12px;
  background-color: #e3ffa8;

  @media (min-width: 834px) {
    width: 212px;
    height: 36px;
  }
`;

export const P = styled.p`
  margin-top: 16px;
  text-align: center;
  color: #b6b6b6;
  cursor: pointer;
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
