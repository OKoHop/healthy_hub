import styled from 'styled-components';
import { NavLink } from 'react-router-dom/dist';

export const StyledNavLinkUserMenu = styled(NavLink)`
  color: ${(p) => p.theme.colors.primaryWhite};
  font-size: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover,
  :focus {
    color: ${(p) => p.theme.colors.primaryGreenLite};
  }
`;

export const BtnLogOut = styled.button`
  color: ${(p) => p.theme.colors.primaryWhite};
  font-size: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  padding: 0;
  gap: 8px;
  &:hover,
  :focus {
    color: ${(p) => p.theme.colors.primaryGreenLite};
  }
`;

export const UserMenuList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SvgUserMenu = styled.svg`
  fill: currentColor;
  stroke: currentColor;
  width: 16px;
  height: 16px;
`;
