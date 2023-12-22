import { useState } from 'react';
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive';
import svgIcons from '../../../images/Header/icons.svg';
import loseFatPng from '../../../images/Header/lose_fat_image_men.png';
import { HeaderCurrentTargetModal } from '../HeaderCurrentTargetModal/HeaderCurrentTargetModal';
import {
  TargetFrame,
  TargetImgBorder,
  ImgTarget,
  TargetContainerBtn,
  TargetBtn,
  TitleGoal,
  TargetSelected,
  SvgArroy,
} from './HeaderFrameTarget.slyled';

export const HeaderFrameTarget = () => {
  const [isTargetPanelOpen, setIsTargetPanelOpen] = useState(false);

  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 834px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });

  const customStyles = {
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0)' },
    content: {
      top: '60px',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translateX(-50%)',
      width: '320px',
      height: '100%',
      padding: '24px 10px 26px',
      border: 'none',
      backgroundColor: '#050505',
      ...(isTabletOrDesktop && {
        top: '100px',
        left: '20%',
        right: 'auto',
        transform: 'translateX(50%)',
        width: '392px',
        height: '352px',
        padding: '20px 84px 0 24px',
        borderRadius: '12px',
        border: 'none',
        backgroundColor: '#0F0F0F',
        boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
        transition: 'top 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      }),
    },
  };
  const rotateSvg = { transform: 'rotate(180deg)' };

  const openPanelTarget = () => {
    setIsTargetPanelOpen(true);
    document.body.classList.add('modal-open');
  };
  const closePanelTarget = () => {
    setIsTargetPanelOpen(false);
    document.body.classList.remove('modal-open');
  };

  const shouldCloseOnOverlayClick = () => {
    if (isTabletOrDesktop) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <TargetFrame>
        <TargetImgBorder>
          <ImgTarget src={`${loseFatPng}`} alt="waight"></ImgTarget>
        </TargetImgBorder>
        <TargetContainerBtn>
          <TitleGoal>Goal</TitleGoal>
          <TargetBtn onClick={openPanelTarget}>
            <TargetSelected>Lose fat</TargetSelected>
            {isTabletOrDesktop &&
              (!isTargetPanelOpen ? (
                <SvgArroy>
                  <use href={`${svgIcons}#icon-arrow-down`}></use>
                </SvgArroy>
              ) : (
                <SvgArroy style={rotateSvg}>
                  <use href={`${svgIcons}#icon-arrow-down`}></use>
                </SvgArroy>
              ))}
            {isMobile && (
              <SvgArroy>
                <use href={`${svgIcons}#icon-arrow-right`}></use>
              </SvgArroy>
            )}
          </TargetBtn>
        </TargetContainerBtn>
      </TargetFrame>

      <Modal
        isOpen={isTargetPanelOpen}
        onRequestClose={closePanelTarget}
        style={customStyles}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick()}
      >
        <HeaderCurrentTargetModal closePanel={closePanelTarget}/>
      </Modal>
    </>
  );
};
