import styled from 'styled-components';
import { NavLink } from 'react-router-dom/dist';

export const StyledHeader = styled.header`
  background-color: ${(p) => p.theme.colors.primaryBlack2};
  height: 60px;
  display: flex;
  align-items: center;

  @media (${(p) => p.theme.mq.tabMin}) {
    height: 100px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const TargetSelectionList = styled.ul`
  margin-left: 127px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 40px;

  @media (${(p) => p.theme.mq.deskMin}) {
    gap: 80px;
    margin-left: 636px;
  }
`;

export const StyledNavLogoLink = styled(NavLink)`
  color: #b6b6b6;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  display: flex;
  align-items: center;
  transition: ${(p) => p.theme.transition.customTrans};
  &:hover {
    color: ${(props) => props.theme.colors.primaryWhite};
  }

  @media (${(p) => p.theme.mq.tabMin}) {
    font-size: 22px;
    line-height: 32px;
  }
`;
