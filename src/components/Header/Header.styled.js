import styled from 'styled-components';
import { NavLink } from 'react-router-dom/dist';

export const StyledHeader = styled.header`
  background-color: #0f0f0f;
  height: 60px;
  display: flex;
  align-items: center;

  @media (min-width: 834px) {
    height: 100px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
`;

export const StyledNavLogoLink = styled(NavLink)`
  color: #b6b6b6;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;
