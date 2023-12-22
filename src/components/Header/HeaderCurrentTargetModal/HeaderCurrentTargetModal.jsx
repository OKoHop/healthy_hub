import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import svgIcons from '../../../images/Header/icons.svg';
import {
  BtnCancel,
  BtnClose,
  SvgClose,
  TextCurrentTarget,
  TitleCurrentTarget,
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
      <form onSubmit={handleFormSubmit}>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="loseFat"
                checked={selectedTarget === 'loseFat'}
                onChange={() => handleTargetChange('loseFat')}
              />
              Lose fat
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="maintain"
                checked={selectedTarget === 'maintain'}
                onChange={() => handleTargetChange('maintain')}
              />
              Maintain
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="gainMuscle"
                checked={selectedTarget === 'gainMuscle'}
                onChange={() => handleTargetChange('gainMuscle')}
              />
              Gain Muscle
            </label>
          </li>
        </ul>
        <button type="submit">Confirm</button>
      </form>
      {isMobile && (
        <BtnCancel type="button" onClick={closePanel}>
          Cancel
        </BtnCancel>
      )}
      <></>
    </>
  );
};
