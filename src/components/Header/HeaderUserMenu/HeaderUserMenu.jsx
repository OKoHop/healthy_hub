import swgIcons from '../../../images/Header/icons.svg';
import {
  StyledNavLinkUserMenu,
  SvgUserMenu,
  UserMenuList,
} from './HeaderUserMenu.styled';

export const HeaderUserMenu = () => {
  return (
      <UserMenuList>
        <li>
          <StyledNavLinkUserMenu to="/settings">
            <SvgUserMenu>
              <use href={`${swgIcons}#icon-setting`}></use>
            </SvgUserMenu>
            Setting
          </StyledNavLinkUserMenu>
        </li>
        <li>
          <StyledNavLinkUserMenu to="/">
            <SvgUserMenu>
              <use href={`${swgIcons}#icon-logout`}></use>
            </SvgUserMenu>
            Log out
          </StyledNavLinkUserMenu>
        </li>
      </UserMenuList>
  );
};
