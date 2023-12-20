import styled from 'styled-components';
import { NavLink } from 'react-router-dom/dist';

export const AuthNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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

export const SvgProfilePhoto = styled.svg`
  fill: currentColor;
  width: 26px;
  height: 26px;
`;
