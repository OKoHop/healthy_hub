import scgIcons from '../../images/Header/icons.svg';
import {
  HeaderStyledUserMenu,
  StyledNavLinkUserMenu,
  SvgUserMenu,
  UserMenuList,
} from './HeaderUserMenu.styled';

export const HeaderUserMenu = () => {
  return (
    <HeaderStyledUserMenu>
      <UserMenuList>
        <li>
          <StyledNavLinkUserMenu to="/settings">
            <SvgUserMenu>
              <use href={`${scgIcons}#icon-setting`}></use>
            </SvgUserMenu>
            Setting
          </StyledNavLinkUserMenu>
        </li>
        <li>
          <StyledNavLinkUserMenu to="/">
            <SvgUserMenu>
              <use href={`${scgIcons}#icon-logout`}></use>
            </SvgUserMenu>
            Log out
          </StyledNavLinkUserMenu>
        </li>
      </UserMenuList>
    </HeaderStyledUserMenu>
  );
};
