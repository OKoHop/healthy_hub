import styled from 'styled-components';
import { NavLink } from 'react-router-dom/dist';

export const StyledHeader = styled.header`
  background-color: ${(p) => p.theme.colors.primaryBlack2};
  height: 60px;
  display: flex;
  align-items: center;

  @media (${(p) => p.theme.mq.tablet}) {
    height: 100px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TargetSelectionList = styled.ul`
  width: 100%;
  margin-right: 75px; 
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 40px;

  @media (${(p) => p.theme.mq.desktop}) {
    gap: 80px;
    margin-right: 124px; 
  }
`;

export const TargetSelectionListItem = styled.li``;

export const StyledNavLogoLink = styled(NavLink)`
  color: #b6b6b6;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  display: flex;
  align-items: center;

  @media (${(p) => p.theme.mq.tablet}) {
    font-size: 22px;
    line-height: 32px;
  }
`;
