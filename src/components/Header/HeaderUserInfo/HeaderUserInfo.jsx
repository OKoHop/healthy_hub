import { useState } from 'react';
import {
  BtnUser,
  SvgUserBtnDown,
  UserInfo,
  UserName,
  UserPohotoStub,
  SvgUserBtnUp,
} from './HeaderUserInfo.style';
import swgIcons from '../../../images/Header/icons.svg';
import { HeaderUserMenu } from '../HeaderUserMenu/HeaderUserMenu';

export const HeaderUserInfo = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userName = 'Konstantin';
  const firstLetter = userName ? userName[0].toUpperCase() : '';

  const heandleClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };
  return (
    <UserInfo>
      <UserName>Konstantin</UserName>
      <UserPohotoStub>{firstLetter}</UserPohotoStub>
      <BtnUser onClick={heandleClick}>
        {!isUserMenuOpen ? (
          <SvgUserBtnDown>
            <use href={`${swgIcons}#icon-arrow-down`}></use>
          </SvgUserBtnDown>
        ) : (
          <SvgUserBtnUp>
            <use href={`${swgIcons}#icon-arrow-down`}></use>
          </SvgUserBtnUp>
        )}
      </BtnUser>
      {isUserMenuOpen && <HeaderUserMenu />}
    </UserInfo>
  );
};
