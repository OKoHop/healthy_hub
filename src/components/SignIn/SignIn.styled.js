import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormBlock = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 54px;
  @media (${(p) => p.theme.mq.tabMin}) {
    width: 380px;
    margin: 0 0 222px;
  }
  @media (${(p) => p.theme.mq.deskMin}) {
    width: 212px;
    margin: 0 0 184px;
  }
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  text-decoration: none;
  background: #e3ffa8;
  border: 1px solid transparent;
  color: #0f0f0f;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-top: 20px;
  &:hover {
    border: 1px solid #e3ffa8;
    background: transparent;
    color: white;
  }
`;

export const ForgotPasswordLink = styled(Link)`
  text-align: center;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
  text-decoration: none;
  margin-top: -6px;
  &:hover {
    color: white;
  }
  @media (${(p) => p.theme.mq.tabMin}) {
    margin-top: 0px;
  }
`;
