import styled from 'styled-components';

export const SvgUserBtnDown = styled.svg`
  margin-left: 4px;
  fill: #e3ffa8;

  height: 14px;
  width: 14px;
  transition: transform ${(p) => p.theme.transition.customTrans};
`;

export const UserInfo = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  &:hover,
  :focus {
    & > ${SvgUserBtnDown} {
      transform: scale(1.1);
    }
  }
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
  font-weight: 600;
  -webkit-text-stroke: 0.5px #0f0f0f;
  font-size: 22px;

  @media (${(p) => p.theme.mq.tabMin}) {
    width: 28px;
    height: 28px;
  }
`;

export const UserPhoto = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;

  @media (${(p) => p.theme.mq.tabMin}) {
    width: 28px;
    height: 28px;
  }
`;

export const UserName = styled.p`
  margin-right: 6px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;

  @media (${(p) => p.theme.mq.tabMin}) {
    font-size: 14px;
    line-height: 20px;
  }
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
  transition: transform ${(p) => p.theme.transition.customTrans};
  &:hover,
  :focus {
    transform: scale(1.2);
  }
`;
