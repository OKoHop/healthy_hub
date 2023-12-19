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

export const HeaderFrameWeight = () => {
  return (
    <WeightFrame>
      <WeightImgBorder>
        <ImgWeight src={`${weightPng}`} alt="waight"></ImgWeight>
      </WeightImgBorder>
      <WeightContainerBtn>
        <TitleWeight>Weight</TitleWeight>
        <WeightBtn>
          <TitleWeightNumber>65</TitleWeightNumber>
          <TextKg>kg</TextKg>
          <SvgEdit>
            <use href={`${svgIcons}#icon-edit-2`}></use>
          </SvgEdit>
        </WeightBtn>
      </WeightContainerBtn>
    </WeightFrame>
  );
};
