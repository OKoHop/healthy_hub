import { NavLink } from 'react-router-dom/dist';
import { AuthNav, HeaderContainer, StyledNavLogoLink } from './Header.styled';

export const Header = () => {
  return (
    <>
      <header>
        <HeaderContainer>
          <StyledNavLogoLink to="/main">HealthyHub</StyledNavLogoLink>
          <AuthNav>
            <NavLink to="/">Sign in</NavLink>
            <p>/</p>
            <NavLink to="/">Sign up</NavLink>
            <svg width="26" height="26"></svg>
          </AuthNav>
        </HeaderContainer>
      </header>
    </>
  );
};
