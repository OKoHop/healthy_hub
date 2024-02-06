import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import svgIcons from '../../../images/Header/icons.svg';
import loseFatPng from '../../../images/Header/lose_fat_image_men.png';
import maintainPng from '../../../images/Header/maintain_image_men.png';
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
} from './HeaderCurrentTargetModal.styled';
import { updateGoal } from '../../../redux/user/operations';
import { useAuth } from '../../../hooks/useAuth';
import { refreshUser } from '../../../redux/auth/operations';
import { toast } from 'react-hot-toast';
import LoaderWithBackdrop from '../../LoaderSpinner';

export const HeaderCurrentTargetModal = ({ closePanel }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [selectedTarget, setSelectedTarget] = useState(user.goal);
  const dispatch = useDispatch();

  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 834px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });

  const handleTargetChange = (value) => {
    setSelectedTarget(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (selectedTarget === user.goal) {
      return toast.error('This Goal has already been selected');
    }

    await dispatch(updateGoal(selectedTarget));
    await dispatch(refreshUser());
    closePanel();
    setLoading(false);
  };

  return (
    <>
      {loading && <LoaderWithBackdrop />}
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
            <FormTargetLabel isSelected={selectedTarget === 'lose fat'}>
              <FormTargetInput
                type="radio"
                value="Lose fat"
                checked={selectedTarget === 'lose fat'}
                onChange={() => handleTargetChange('lose fat')}
              />
              <TargetImgBorder isSelected={selectedTarget === 'lose fat'}>
                <ImgTarget src={`${loseFatPng}`} alt="weight"></ImgTarget>
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
                <ImgTarget src={`${maintainPng}`} alt="=maintain"></ImgTarget>
              </TargetImgBorder>
              Maintain
            </FormTargetLabel>
          </li>
          <li>
            <FormTargetLabel isSelected={selectedTarget === 'gain muscle'}>
              <FormTargetInput
                type="radio"
                value="gain muscle"
                checked={selectedTarget === 'gain muscle'}
                onChange={() => handleTargetChange('gain muscle')}
              />
              <TargetImgBorder isSelected={selectedTarget === 'gain muscle'}>
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
