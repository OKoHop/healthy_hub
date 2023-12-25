import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive';
import svgIcons from '../../../images/Header/icons.svg';
import loseFatPng from '../../../images/Header/lose_fat_image_men.png';
import maintakePng from '../../../images/Header/maintake_image_men.png';
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
import { selectUser } from '../../../redux/auth/selectors';
import { refreshUser } from '../../../redux/auth/operations';
import { useAuth } from '../../../hooks/useAuth';

export const HeaderFrameTarget = () => {
  const [isTargetPanelOpen, setIsTargetPanelOpen] = useState(false);
  const { user } = useAuth();
  const dispatch = useDispatch();
  console.log({ user });

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

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
        height: '377px',
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
          {user.goal === 'Lose Fat' && (
            <ImgTarget src={`${loseFatPng}`} alt="waight"></ImgTarget>
          )}
          {user.goal === 'Maintain' && (
            <ImgTarget src={`${maintakePng}`} alt="waight"></ImgTarget>
          )}
          {user.goal === 'Gain Muscle' && (
            <ImgTarget src={`${gainMusclePng}`} alt="waight"></ImgTarget>
          )}
        </TargetImgBorder>
        <TargetContainerBtn>
          <TitleGoal>Goal</TitleGoal>
          <TargetBtn onClick={openPanelTarget}>
            <TargetSelected>{user.goal}</TargetSelected>
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
