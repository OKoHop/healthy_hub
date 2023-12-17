import styled from 'styled-components';
import { NavLink } from 'react-router-dom/dist';

export const HeaderStyledUserMenu = styled.div`
  position: absolute;
  top: 34px;
  right: 0;
  width: 158px;
  height: 112px;
  background-color: #0f0f0f;
  border-radius: 12px;
  box-shadow: 0px 2px 5px 3px rgba(227, 255, 168, 0.2);
  padding: 24px;
  z-index: 999;
`;

export const StyledNavLinkUserMenu = styled(NavLink)`
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover,
  :focus {
    color: #e3ffa8;
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
