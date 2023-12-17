import styled from 'styled-components';

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

export const UserPohotoStub = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #e3ffa8;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 700;
  -webkit-text-stroke: 0.5px #0f0f0f;
  font-size: 18px;
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
  &:hover,
  :focus {
    transform: scale(1.2);
  }
`;

export const SvgUserBtnDown = styled.svg`
  fill: #e3ffa8;
  width: 14px;
  height: 14px;
`;

export const SvgUserBtnUp = styled.svg`
  transform: rotate(180deg);
  fill: #e3ffa8;
  width: 14px;
  height: 14px;
`;

