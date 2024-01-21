import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import svgIcons from '../../../images/Header/icons.svg';
import { refreshUser } from '../../../redux/auth/operations';
import { updateWeight } from '../../../redux/user/operations';
import LoaderWithBackdrop from '../../LoaderSpinner';
import {
  BtnCancel,
  BtnClose,
  DateText,
  DateTextContainer,
  DateToday,
  FormWeight,
  FormWeightBtn,
  FormWeightInput,
  SvgClose,
  TextCurrentWeight,
  TitleCurrentWeight,
} from './HeaderCurrentWeightModal.styled';

export const HeaderCurrentWeightModal = ({ closePanel }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 834px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });

  const fullDate = new Date();
  const year = fullDate.getFullYear();
  const month = fullDate.getMonth() + 1;
  const day = fullDate.getDate();
  const formattedDate = `${day < 10 ? '0' : ''}${day}.${
    month < 10 ? '0' : ''
  }${month}.${year}`;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const currentWeight = e.target.elements.weight.value;
    if (currentWeight === '') {
      return toast.error('Enter current weight');
    }

    await dispatch(updateWeight(currentWeight));
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
      <TitleCurrentWeight>Enter your current weight</TitleCurrentWeight>
      <TextCurrentWeight>
        You can record your weight once a day
      </TextCurrentWeight>
      <DateTextContainer>
        <DateToday>Today</DateToday>
        <DateText>{formattedDate}</DateText>
      </DateTextContainer>
      <FormWeight onSubmit={handleFormSubmit}>
        <FormWeightInput
          type="number"
          name="weight"
          autoComplete="off"
          placeholder="Enter your weight"
          min="1"
          max="500"
          // required
        />
        <FormWeightBtn type="submit">Confirm</FormWeightBtn>
      </FormWeight>
      {isMobile && (
        <BtnCancel type="button" onClick={closePanel}>
          Cancel
        </BtnCancel>
      )}
    </>
  );
};
