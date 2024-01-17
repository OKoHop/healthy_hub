import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive';
import svgIcons from '../../../images/Header/icons.svg';
import loseFatPng from '../../../images/Header/lose_fat_image_men.png';
import maintainPng from '../../../images/Header/maintain_image_men.png';
import gainMusclePng from '../../../images/Header/gain_muscle.png';
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
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';
import { refreshUser } from '../../../redux/auth/operations';

export const HeaderFrameTarget = () => {
  const [isTargetPanelOpen, setIsTargetPanelOpen] = useState(false);
  const {user} = useAuth();
  const dispatch = useDispatch();
 
/*   useEffect(() => {
      dispatch(refreshUser())
  }, [dispatch]); */

  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 834px)' });
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
      ...(isTablet && {
        top: '100px',
        left: '50%',
        right: 'auto',
        transform: 'translateX(-50%)',
        width: '392px',
        height: '378px',
        padding: '20px 84px 40px 24px',
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
    if (isTablet) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <TargetFrame>
        <TargetImgBorder>
          {user.goal === 'lose fat' && (
            <ImgTarget src={`${loseFatPng}`} alt="Runner"></ImgTarget>
          )}
          {user.goal === 'maintain' && (
            <ImgTarget src={`${maintainPng}`} alt="Yoga"></ImgTarget>
          )}
          {user.goal === 'gain muscle' && (
            <ImgTarget src={`${gainMusclePng}`} alt="Muscle"></ImgTarget>
          )}
        </TargetImgBorder>
        <TargetContainerBtn>
          <TitleGoal>Goal</TitleGoal>
          <TargetBtn onClick={openPanelTarget}>
            <TargetSelected>{user.goal.charAt(0).toUpperCase() + user.goal.slice(1)}</TargetSelected>
            {isTablet &&
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
        <HeaderCurrentTargetModal closePanel={closePanelTarget} />
      </Modal>
    </>
  );
};
