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
  color: ${(p) => p.theme.colors.primaryWhite};
  text-align: right;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  &.active {
    color: ${(p) => p.theme.colors.primaryGreenLite};
  }

  @media (${(p) => p.theme.mq.tabMin}) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const SvgProfilePhoto = styled.svg`
  fill: currentColor;
  width: 26px;
  height: 26px;
`;
