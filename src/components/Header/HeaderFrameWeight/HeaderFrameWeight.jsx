import { useState } from 'react';
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive';
import { useAuth } from '../../../hooks/useAuth';
import weightPng from '../../../images/Header/waight_image.png';
import svgIcons from '../../../images/Header/icons.svg';
import {
  WeightImgBorder,
  ImgWeight,
  WeightBtn,
  TextKg,
  TitleWeight,
  TitleWeightNumber,
  SvgEdit,
  WeightFrame,
  WeightContainerBtn,
} from './HeaderFrameWeight.styled';
import { HeaderCurrentWeightModal } from '../HeaderCurrentWeightModal/HeaderCurrentWeightModal';

export const HeaderFrameWeight = () => {
  const [isWeightPanelOpen, setIsWeightPanelOpen] = useState(false);
  const { user } = useAuth();

  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 834px)' });

  const customStyles = {
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0)', zIndex: 9999,},
    content: {
      top: '60px',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translateX(-50%)',
      width: '320px',
      height: '100%',
      padding: '24px 10px',
      border: 'none',
      backgroundColor: '#050505',
      ...(isTablet && {
        top: '100px',
        left: '20%',
        right: 'auto',
        transform: 'translateX(50%)',
        width: '392px',
        height: '200px',
        padding: '20px 24px 0',
        borderRadius: '12px',
        border: 'none',
        backgroundColor: '#0F0F0F',
        boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
        transition: 'top 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      }),
      ...(isDesktop && {
        top: '100px',
        left: '42%',
        right: 'auto',
        transform: 'translateX(50%)',
      }),
    },
  };

  const openPanelWeight = () => {
    setIsWeightPanelOpen(true);
    document.body.classList.add('modal-open');
  };
  const closePanelWeight = () => {
    setIsWeightPanelOpen(false);
    document.body.classList.remove('modal-open');
  };

  const shouldCloseOnOverlayClick = () => {
    if (isTablet) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <WeightFrame>
        <WeightImgBorder>
          <ImgWeight src={`${weightPng}`} alt="waight"></ImgWeight>
        </WeightImgBorder>
        <WeightContainerBtn>
          <TitleWeight>Weight</TitleWeight>
          <WeightBtn onClick={openPanelWeight}>
            <TitleWeightNumber>{user.weight}</TitleWeightNumber>
            <TextKg>kg</TextKg>
            <SvgEdit>
              <use href={`${svgIcons}#icon-edit-2`}></use>
            </SvgEdit>
          </WeightBtn>
        </WeightContainerBtn>
      </WeightFrame>

      <Modal
        isOpen={isWeightPanelOpen}
        onRequestClose={closePanelWeight}
        style={customStyles}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick()}
      >
        <HeaderCurrentWeightModal closePanel={closePanelWeight} />
      </Modal>
    </>
  );
};
