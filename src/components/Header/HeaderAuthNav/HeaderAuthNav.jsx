import scgIcons from '../../../images/Header/icons.svg';
import {
  AuthNav,
  StyledNavLinkAuth,
  SvgProfilePhoto,
} from './HeaderAuthNav.styled';

export const HeaderAuthNav = () => {
  return (
    <AuthNav>
      <StyledNavLinkAuth to="/">Sign in</StyledNavLinkAuth>
      {' / '}
      <StyledNavLinkAuth to="/">Sign up</StyledNavLinkAuth>
      <SvgProfilePhoto>
        <use href={`${scgIcons}#icon-profile-circle`}></use>
      </SvgProfilePhoto>
    </AuthNav>
  );
};
