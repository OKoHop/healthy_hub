import { useMediaQuery } from 'react-responsive';
import svgIcons from '../../../images/Header/icons.svg';
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
} from './HeaderCurrentWeightModal.style';

export const HeaderCurrentWeightModal = ({ closePanel }) => {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 834px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });

  const fullDate = new Date();
  const year = fullDate.getFullYear();
  const month = fullDate.getMonth() + 1;
  const day = fullDate.getDate();
  const formattedDate = `${day < 10 ? '0' : ''}${day}.${
    month < 10 ? '0' : ''
  }${month}.${year}`;

  return (
    <>
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
      <FormWeight>
        <FormWeightInput
          type="number"
          name="weight"
          autoComplete="off"
          placeholder="Enter your weight"
          min="1"
          required
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
