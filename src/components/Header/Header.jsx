import {
  AuthNav,
  HeaderContainer,
  StyledHeader,
  StyledNavLogoLink,
  StyledNavLinkAuth,
} from './Header.styled';

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <HeaderContainer className="container">
          <StyledNavLogoLink to="/main">HealthyHub</StyledNavLogoLink>
          <AuthNav>
            <StyledNavLinkAuth to="/">Sign in</StyledNavLinkAuth>
            {' / '}
            <StyledNavLinkAuth to="/">Sign up</StyledNavLinkAuth>
            <svg width="26" height="26" fill="currentColor">
              <use href="../../images/Header/icons.svg#icon-profile-circle"></use>
            </svg>
          </AuthNav>
        </HeaderContainer>
      </StyledHeader>
    </>
  );
};
