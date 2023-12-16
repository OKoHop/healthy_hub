import styled from 'styled-components';

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const UserPohotoStub = styled.div`
  width: 24px;
  height: 24 px;
  border-radius: 50%;
  background-color: #e3ffa8;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
`;

export const UserName = styled.p`
  margin-right: 6px;
  font-size: 12px;
  font-weight: 400;
`;

export const BtnUser = styled.button`
  margin-left: 2px;
  padding: 0;
  width: 16px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
`;

export const SvgUserBtn = styled.svg`
  fill: #e3ffa8;
  width: 14px;
  height: 14px;
`;
