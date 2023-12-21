import { useState } from 'react';
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive';
import {
  SvgUserBtnDown,
  UserInfo,
  UserName,
  UserPohotoStub,
} from './HeaderUserInfoNav.style';
import swgIcons from '../../../images/Header/icons.svg';
import { HeaderUserMenu } from '../HeaderUserMenu/HeaderUserMenu';
import { useAuth } from '../../../hooks/useAuth';

export const HeaderUserInfoNav = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user } = useAuth();

  const firstLetter = user.name ? user.name[0].toUpperCase() : '';

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

  const rotateSvg = { transform: 'rotate(180deg)' };
  return (
    <>
      <UserInfo onClick={openMenu}>
        <UserName>{user.name}</UserName>
        <UserPohotoStub>{firstLetter}</UserPohotoStub>
        {!isUserMenuOpen ? (
          <SvgUserBtnDown>
            <use href={`${swgIcons}#icon-arrow-down`}></use>
          </SvgUserBtnDown>
        ) : (
          <SvgUserBtnDown style={rotateSvg}>
            <use href={`${swgIcons}#icon-arrow-down`}></use>
          </SvgUserBtnDown>
        )}
      </UserInfo>

      <Modal
        isOpen={isUserMenuOpen}
        onRequestClose={closeMenu}
        style={customStyles}
        ariaHideApp={false}
      >
        <HeaderUserMenu />
      </Modal>
    </>
  );
};
