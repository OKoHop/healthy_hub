import DiaryItem from './DiaryItem/DiaryItem';
import {
  CardsWrap,
  DiaryLink,
  Title,
  TitleWrapper,
  Container,
} from './DiaryOnMain.styled';

import breakfastImage from '../../../images/diaryPageImages/breakfast.png';
import dinnerImage from '../../../images/diaryPageImages/dinner.png';
import lunchImage from '../../../images/diaryPageImages/lunch.png';
import snackImage from '../../../images/diaryPageImages/snack.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectConsumedMacronutrientsPerDay, selectFoodIntake } from '../../../redux/statistics/statisticSelectors';
import { getStats } from '../../../redux/statistics/statisticOperations';
import { useEffect } from 'react';

const DiaryOnMain = () => {
  const dispatch = useDispatch();
  const foodIntake = useSelector(selectFoodIntake)
  const ConsumedMacronutrients = useSelector(
    selectConsumedMacronutrientsPerDay
  );

  const {
    breakfast: breakfastInfo,
    lunch: lunchInfo,
    dinner: dinnerInfo,
    snack: snackInfo,
  } = ConsumedMacronutrients;

  // const getStatsPerDay = () => {
  //   const currentDay = new Date();
  //   const validateDate = `${currentDay.getFullYear()}-${
  //     currentDay.getMonth() + 1
  //   }-${currentDay.getDate()}`;
  //   dispatch(getStats(validateDate, validateDate));
  // };

  // useEffect(() => {
  //   getStatsPerDay();
  // });

  return (
    <Container>
      <TitleWrapper>
        <Title>Diary</Title>
        <DiaryLink to="/diary">See more</DiaryLink>
      </TitleWrapper>
      <CardsWrap>
        <DiaryItem
          title={'Breakfast'}
          image={breakfastImage}
          info={breakfastInfo}
        />
        <DiaryItem title={'Lunch'} image={lunchImage} info={lunchInfo} />
        <DiaryItem title={'Dinner'} image={dinnerImage} info={dinnerInfo} />
        <DiaryItem title={'Snack'} image={snackImage} info={snackInfo} />
      </CardsWrap>
    </Container>
  );
};

export default DiaryOnMain;
