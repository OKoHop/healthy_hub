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
  SvgArroyRight,
} from './HeaderFrameTarget.slyled';

export const HeaderFrameTarget = () => {
  return (
    <TargetFrame>
      <TargetImgBorder>
        <ImgTarget src={`${loseFatPng}`} alt="waight"></ImgTarget>
      </TargetImgBorder>
      <TargetContainerBtn>
        <TitleGoal>Goal</TitleGoal>
        <TargetBtn>
          <TargetSelected>Lose fat</TargetSelected>
          <SvgArroyRight>
            <use href={`${svgIcons}#icon-arrow-right`}></use>
          </SvgArroyRight>
        </TargetBtn>
      </TargetContainerBtn>
    </TargetFrame>
  );
};
