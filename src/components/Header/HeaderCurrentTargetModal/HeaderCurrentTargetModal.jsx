import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import svgIcons from '../../../images/Header/icons.svg';
import loseFatPng from '../../../images/Header/lose_fat_image_men.png';
import maintakePng from '../../../images/Header/maintake_image_men.png';
import gainMusclePng from '../../../images/Header/gain_muscle.png';
import {
  BtnCancel,
  BtnClose,
  FormTarget,
  FormTargetBtn,
  SvgClose,
  TextCurrentTarget,
  TitleCurrentTarget,
  FormTargetList,
  FormTargetInput,
  ImgTarget,
  FormTargetLabel,
  TargetImgBorder,
} from './HeaderCurrentTargetModal.style';

export const HeaderCurrentTargetModal = ({ closePanel }) => {
  const [selectedTarget, setSelectedTarget] = useState('loseFat');

  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 834px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });

  const handleTargetChange = (value) => {
    setSelectedTarget(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    closePanel();
  };

  return (
    <>
      {isTabletOrDesktop && (
        <BtnClose type="button" onClick={closePanel}>
          <SvgClose>
            <use href={`${svgIcons}#icon-close-circle`}></use>
          </SvgClose>
        </BtnClose>
      )}
      <TitleCurrentTarget>Target selection</TitleCurrentTarget>
      <TextCurrentTarget>
        The service will adjust your calorie intake to your goal
      </TextCurrentTarget>
      <FormTarget onSubmit={handleFormSubmit}>
        <FormTargetList>
          <li>
            <FormTargetLabel isSelected={selectedTarget === 'loseFat'}>
              <FormTargetInput
                type="radio"
                value="loseFat"
                checked={selectedTarget === 'loseFat'}
                onChange={() => handleTargetChange('loseFat')}
              />
              <TargetImgBorder isSelected={selectedTarget === 'loseFat'}>
                <ImgTarget src={`${loseFatPng}`} alt="waight"></ImgTarget>
              </TargetImgBorder>
              Lose fat
            </FormTargetLabel>
          </li>
          <li>
            <FormTargetLabel isSelected={selectedTarget === 'maintain'}>
              <FormTargetInput
                type="radio"
                value="maintain"
                checked={selectedTarget === 'maintain'}
                onChange={() => handleTargetChange('maintain')}
              />
              <TargetImgBorder isSelected={selectedTarget === 'maintain'}>
                <ImgTarget src={`${maintakePng}`} alt="waight"></ImgTarget>
              </TargetImgBorder>
              Maintain
            </FormTargetLabel>
          </li>
          <li>
            <FormTargetLabel isSelected={selectedTarget === 'gainMuscle'}>
              <FormTargetInput
                type="radio"
                value="gainMuscle"
                checked={selectedTarget === 'gainMuscle'}
                onChange={() => handleTargetChange('gainMuscle')}
              />
              <TargetImgBorder isSelected={selectedTarget === 'gainMuscle'}>
                <ImgTarget src={`${gainMusclePng}`} alt="waight"></ImgTarget>
              </TargetImgBorder>
              Gain Muscle
            </FormTargetLabel>
          </li>
          <li>
            <FormTargetBtn type="submit">Confirm</FormTargetBtn>
          </li>
        </FormTargetList>
      </FormTarget>
      {isMobile && (
        <BtnCancel type="button" onClick={closePanel}>
          Cancel
        </BtnCancel>
      )}
      <></>
    </>
  );
};
