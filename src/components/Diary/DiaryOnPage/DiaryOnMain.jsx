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
// import { selectConsumedMacronutrientsPerDay } from '../../../redux/statistics/statisticSelectors';
// import { getStats } from '../../../redux/statistics/statisticOperations';
// import { useEffect } from 'react';
import {
  selectBreakfastCarbonohidrates,
  selectBreakfastFat,
  selectBreakfastProtein,
  selectDinnerCarbonohidrates,
  selectDinnerFat,
  selectDinnerProtein,
  selectLunchCarbonohidrates,
  selectLunchFat,
  selectLunchProtein,
  selectSnackCarbonohidrates,
  selectSnackFat,
  selectSnackProtein,
} from '../../../redux/Today/Diary/selectors';
import { fetchFoodStatistics } from '../../../redux/Today/Diary/operations';
import { useEffect } from 'react';

const DiaryOnMain = () => {
  const dispatch = useDispatch();

  // const ConsumedMacronutrients = useSelector(
  //   selectConsumedMacronutrientsPerDay
  // );

  // const {
  //   breakfast: breakfastInfo,
  //   lunch: lunchInfo,
  //   dinner: dinnerInfo,
  //   snack: snackInfo,
  // } = ConsumedMacronutrients;

  const breakfastCarbonohidrates = useSelector(selectBreakfastCarbonohidrates);
  const breakfastProtein = useSelector(selectBreakfastProtein);
  const breakfastFat = useSelector(selectBreakfastFat);

  const lunchCarbonohidrates = useSelector(selectLunchCarbonohidrates);
  const lunchProtein = useSelector(selectLunchProtein);
  const lunchFat = useSelector(selectLunchFat);

  const dinnerCarbonohidrates = useSelector(selectDinnerCarbonohidrates);
  const dinnerProtein = useSelector(selectDinnerProtein);
  const dinnerFat = useSelector(selectDinnerFat);

  const snackCarbonohidrates = useSelector(selectSnackCarbonohidrates);
  const snackProtein = useSelector(selectSnackProtein);
  const snackFat = useSelector(selectSnackFat);

    useEffect(() => {
    dispatch(fetchFoodStatistics());
  }, []);

  // const getStatsPerDay = () => {
  //   const currentDay = new Date();
  //   const validateDate = `${currentDay.getFullYear()}-${
  //     currentDay.getMonth() + 1
  //   }-${currentDay.getDate()}`;
  //   dispatch(fetchFoodStatistics(validateDate, validateDate));
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
          carbonohidrates={breakfastCarbonohidrates}
          protein={breakfastProtein}
          fat={breakfastFat}
        />
        <DiaryItem
          title={'Lunch'}
          image={lunchImage}
          carbonohidrates={lunchCarbonohidrates}
          protein={lunchProtein}
          fat={lunchFat}
        />
        <DiaryItem
          title={'Dinner'}
          image={dinnerImage}
          carbonohidrates={dinnerCarbonohidrates}
          protein={dinnerProtein}
          fat={dinnerFat}
        />
        <DiaryItem
          title={'Snack'}
          image={snackImage}
          carbonohidrates={snackCarbonohidrates}
          protein={snackProtein}
          fat={snackFat}
        />
      </CardsWrap>
    </Container>
  );
};

export default DiaryOnMain;
