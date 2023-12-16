import styled from 'styled-components';
import { NavLink } from 'react-router-dom/dist';

export const StyledHeader = styled.header`
  background-color: #0f0f0f;
  height: 60px;
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledNavLogoLink = styled(NavLink)`
  color: #b6b6b6;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const AuthNav = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const StyledNavLinkAuth = styled(NavLink)`
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  &.active {
    color: #e3ffa8;
  }
`;
