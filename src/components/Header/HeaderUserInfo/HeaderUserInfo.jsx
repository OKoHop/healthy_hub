import { useState } from 'react';
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive';
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
  const isTabletOrDesktop = useMediaQuery({ minWidth: 834 });
  const customStyles = {
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0)' },
    content: {
      top: '60px',
      left: '70%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translateX(-50%)',
      width: '158px',
      height: '112px',
      padding: '24px',
      borderRadius: '12px',
      border: 'none',
      backgroundColor: '#0F0F0F',
      boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
      transition: 'top 0.3s ease-in-out',
      ...(isTabletOrDesktop && {
        top: '90px',
        right: '50%',
        transform: 'translateX(50%)',
      }),
    },
  };

  const openMenu = () => {
    setIsUserMenuOpen(true);
  };

  const closeMenu = () => setIsUserMenuOpen(false);
  return (
    <UserInfo>
      <UserName>Konstantin</UserName>
      <UserPohotoStub>{firstLetter}</UserPohotoStub>
      <BtnUser type="button" onClick={openMenu}>
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

      <Modal
        isOpen={isUserMenuOpen}
        onRequestClose={closeMenu}
        style={customStyles}
        ariaHideApp={false}
      >
        <HeaderUserMenu />
      </Modal>
    </UserInfo>
  );
};

