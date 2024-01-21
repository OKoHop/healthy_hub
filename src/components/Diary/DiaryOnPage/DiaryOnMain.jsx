import { useEffect, useState } from 'react';

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
import { selectFoodIntake } from '../../../redux/statistics/statisticSelectors';
import { getStats } from '../../../redux/statistics/statisticOperations';
import today from '../../../helpers/todayData';
import { calculateTotal } from '../../../helpers/calculateTotalIngridients';

const DiaryOnMain = () => {
  const dispatch = useDispatch();
  const foodIntake = useSelector(selectFoodIntake);

  const [lunchFoodIntake, setLunchFoodIntake] = useState([]);
  const [breakfastFoodIntake, setBreakfastFoodIntake] = useState([]);
  const [dinnerFoodIntake, setDinnerFoodIntake] = useState([]);
  const [snackFoodIntake, setSnackFoodIntake] = useState([]);

  useEffect(() => {
    if (foodIntake) {
      setLunchFoodIntake(foodIntake.foodIntake.lunch);
      setBreakfastFoodIntake(foodIntake.foodIntake.breakfast);
      setDinnerFoodIntake(foodIntake.foodIntake.dinner);
      setSnackFoodIntake(foodIntake.foodIntake.snack);
    }
  }, [foodIntake]);

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
          info={calculateTotal(breakfastFoodIntake)}
        />
        <DiaryItem
          title={'Lunch'}
          image={lunchImage}
          info={calculateTotal(lunchFoodIntake)}
        />
        <DiaryItem
          title={'Dinner'}
          image={dinnerImage}
          info={calculateTotal(dinnerFoodIntake)}
        />
        <DiaryItem
          title={'Snack'}
          image={snackImage}
          info={calculateTotal(snackFoodIntake)}
        />
      </CardsWrap>
    </Container>
  );
};

export default DiaryOnMain;
