import { useMediaQuery } from 'react-responsive';
import svgIcons from '../../../images/Header/icons.svg';
import loseFatPng from '../../../images/Header/lose_fat_image_men.png';
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
  const isTabletorDesktop = useMediaQuery({ query: '(min-width: 834px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });

  return (
    <TargetFrame>
      <TargetImgBorder>
        <ImgTarget src={`${loseFatPng}`} alt="waight"></ImgTarget>
      </TargetImgBorder>
      <TargetContainerBtn>
        <TitleGoal>Goal</TitleGoal>
        <TargetBtn>
          <TargetSelected>Lose fat</TargetSelected>
          {isTabletorDesktop && (
            <SvgArroy>
              <use href={`${svgIcons}#icon-arrow-down`}></use>
            </SvgArroy>
          )}
          {isMobile && (
            <SvgArroy>
              <use href={`${svgIcons}#icon-arrow-right`}></use>
            </SvgArroy>
          )}
        </TargetBtn>
      </TargetContainerBtn>
    </TargetFrame>
  );
};
