import styled from 'styled-components';
import { NavLink } from 'react-router-dom/dist';

export const HeaderContainer = styled.div`
  padding: 19px 10px;
  display: flex;
  justify-content: space-between;
`;

export const StyledNavLogoLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 700;
  color: grey;
`;

export const AuthNav = styled.div`
 display: flex;
`;
