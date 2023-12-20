import { useDispatch } from 'react-redux';
import swgIcons from '../../../images/Header/icons.svg';
import { logOut } from '../../../redux/auth/operations';
import {
  StyledNavLinkUserMenu,
  BtnLogOut,
  SvgUserMenu,
  UserMenuList,
} from './HeaderUserMenu.styled';

export const HeaderUserMenu = () => {
  const dispatch = useDispatch();

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
          <BtnLogOut onClick={() => dispatch(logOut())}>
            <SvgUserMenu>
              <use href={`${swgIcons}#icon-logout`}></use>
            </SvgUserMenu>
            Log out
          </BtnLogOut>
        </li>
      </UserMenuList>
  );
};
