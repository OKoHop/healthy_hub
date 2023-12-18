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
`;

export const StyledNavLogoLink = styled(NavLink)`
  color: #b6b6b6;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  display: flex;
  align-items: center;
`;
