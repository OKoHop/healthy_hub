import { useState } from 'react';
import Modal from 'react-modal';
import scgIcons from '../../images/Header/icons.svg';
import { HeaderMobMenu } from '../HeaderMobMenu/HeaderMobMenu';
import { BtnMenuMob, SvgMenuMobBtn } from './HeaderMobMenuBtn.styled';

const customStyles = {
  content: {
    top: '60px',
    right: 'auto',
    width: '300px',
    height: '184px',
    borderRadius: '24px 132px 24px 24px',
    padding: '40px',
  },
};

export const HeaderMobMenuBtn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <BtnMenuMob onClick={openMenu}>
        <SvgMenuMobBtn>
          <use href={`${scgIcons}#icon-menu`}></use>
        </SvgMenuMobBtn>
      </BtnMenuMob>

      <Modal
        isOpen={isMenuOpen}
        onRequestClose={closeMenu}
        style={customStyles}
      >
        <HeaderMobMenu/>
      </Modal>
    </>
  );
};
