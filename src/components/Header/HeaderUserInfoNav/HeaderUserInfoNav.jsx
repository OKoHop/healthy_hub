import { useState } from 'react';
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive';
import {
  SvgUserBtnDown,
  UserInfo,
  UserName,
  UserPhoto,
  UserPohotoStub,
} from './HeaderUserInfoNav.styled';
import swgIcons from '../../../images/Header/icons.svg';
import { HeaderUserMenu } from '../HeaderUserMenu/HeaderUserMenu';
import { useAuth } from '../../../hooks/useAuth';

export const HeaderUserInfoNav = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user } = useAuth();

  const firstLetter = user.name ? user.name[0].toUpperCase() : '';

  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 834px)' });

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      width: '300px',
      margin: '0 auto',
      ...(isTablet && {
        width: '780px',
      }),
      ...(isDesktop && {
        width: '1372px',
      }),
    },
    content: {
      top: '54px',
      right: '0',
      left: '100%',
      transform: 'translateX(-100%)',
      width: '158px',
      height: '112px',
      padding: '24px',
      borderRadius: '12px',
      border: 'none',
      backgroundColor: '#0F0F0F',
      boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
      transition: 'top 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      ...(isTablet && {
        top: '80px',
      }),
    },
  };
  const rotateSvg = { transform: 'rotate(180deg)' };

  const openMenu = () => {
    setIsUserMenuOpen(true);
    document.body.classList.add('modal-open');
  };
  const closeMenu = () => {
    setIsUserMenuOpen(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <>
      <UserInfo onClick={openMenu}>
        <UserName>{user.name}</UserName>
        {user.avatarURL.includes('www.gravatar.com') ? (
          <UserPohotoStub>{firstLetter}</UserPohotoStub>
        ) : (
          <UserPhoto src={user.avatarURL}></UserPhoto>
        )}

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
        <HeaderUserMenu closeMenu={closeMenu} />
      </Modal>
    </>
  );
};
