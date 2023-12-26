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
import { useSelector } from 'react-redux';
import { selectConsumedMacronutrientsPerDay } from '../../../redux/statistics/statisticSelectors';

const DiaryOnMain = () => {
  const ConsumedMacronutrients = useSelector(
    selectConsumedMacronutrientsPerDay
  );
  console.log(ConsumedMacronutrients);

  const {
    breakfast: breakfastInfo,
    lunch: lunchInfo,
    dinner: dinnerInfo,
    snack: snackInfo,
  } = ConsumedMacronutrients;

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
