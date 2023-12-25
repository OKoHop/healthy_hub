import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
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
import { updateGoal } from '../../../redux/user/operations';
import { useAuth } from '../../../hooks/useAuth';
import { refreshUser } from '../../../redux/auth/operations';

export const HeaderCurrentTargetModal = ({ closePanel }) => {
  const { user } = useAuth();
  const [selectedTarget, setSelectedTarget] = useState(user.goal);
  const dispatch = useDispatch();

  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 834px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });

  const handleTargetChange = (value) => {
    setSelectedTarget(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateGoal(selectedTarget));
    dispatch(refreshUser());
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
            <FormTargetLabel isSelected={selectedTarget === 'Lose fat'}>
              <FormTargetInput
                type="radio"
                value="Lose fat"
                checked={selectedTarget === 'Lose fat'}
                onChange={() => handleTargetChange('Lose fat')}
              />
              <TargetImgBorder isSelected={selectedTarget === 'Lose fat'}>
                <ImgTarget src={`${loseFatPng}`} alt="waight"></ImgTarget>
              </TargetImgBorder>
              Lose fat
            </FormTargetLabel>
          </li>
          <li>
            <FormTargetLabel isSelected={selectedTarget === 'Maintain'}>
              <FormTargetInput
                type="radio"
                value="Maintain"
                checked={selectedTarget === 'Maintain'}
                onChange={() => handleTargetChange('Maintain')}
              />
              <TargetImgBorder isSelected={selectedTarget === 'Maintain'}>
                <ImgTarget src={`${maintakePng}`} alt="=maintain"></ImgTarget>
              </TargetImgBorder>
              Maintain
            </FormTargetLabel>
          </li>
          <li>
            <FormTargetLabel isSelected={selectedTarget === 'Gain Muscle'}>
              <FormTargetInput
                type="radio"
                value="Gain Muscle"
                checked={selectedTarget === 'Gain Muscle'}
                onChange={() => handleTargetChange('Gain Muscle')}
              />
              <TargetImgBorder isSelected={selectedTarget === 'Gain Muscle'}>
                <ImgTarget src={`${gainMusclePng}`} alt="muscle"></ImgTarget>
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
