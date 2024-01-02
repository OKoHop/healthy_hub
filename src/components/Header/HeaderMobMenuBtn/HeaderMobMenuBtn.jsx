import { useState } from 'react';
import Modal from 'react-modal';
import svgIcons from '../../../images/Header/icons.svg';
import { HeaderMobMenu } from '../HeaderMobMenu/HeaderMobMenu';
import {
  BtnMenuMob,
  SvgMenuMobBtn,
  BtnClose,
  SvgClose,
} from './HeaderMobMenuBtn.styled';

const customStyles = {
  overlay: { backgroundColor: 'rgba(0, 0, 0, 0)' },
  content: {
    top: '60px',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translateX(-50%)',
    width: '300px',
    height: '184px',
    padding: '24px',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: '#0F0F0F',
    boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
    transition: 'top 0.3s ease-in-out',
  },
};

export const HeaderMobMenuBtn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <>
      <BtnMenuMob onClick={openMenu}>
        <SvgMenuMobBtn>
          <use href={`${svgIcons}#icon-menu`}></use>
        </SvgMenuMobBtn>
      </BtnMenuMob>

      <Modal
        isOpen={isMenuOpen}
        onRequestClose={closeMenu}
        style={customStyles}
        ariaHideApp={false}
      >
        <BtnClose type="button" onClick={closeMenu}>
          <SvgClose>
            <use href={`${svgIcons}#icon-close-circle`}></use>
          </SvgClose>
        </BtnClose>
        <HeaderMobMenu />
      </Modal>
    </>
  );
};
