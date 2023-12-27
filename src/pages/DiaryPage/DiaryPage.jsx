import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import ItemsToAdd from '../../components/Diary/DiaryPageItemsToAdd/ItemsToAdd';
import ElementOfFood from '../../components/Diary/Diary/ElementOfFood';
import {
  selectFoodIntake,
  selectConsumedMacronutrientsPerDay,
  selectConsumedProductsForBreakfast,
  selectConsumedProductsForDinner,
  selectConsumedProductsForLunch,
  selectConsumedProductsForSnack,
  selectIntakeFoodPerDay,
  selectStatsInfo,
} from '../../redux/statistics/statisticSelectors';
import { getArrayToRenderDiary } from '../../helpers/getArrayToRenderDiary';

import breakfastImg from '../../images/diaryPageImages/breakfast.png';
import dinnerImg from '../../images/diaryPageImages/dinner.png';
import lunchImg from '../../images/diaryPageImages/lunch.png';
import snackImg from '../../images/diaryPageImages/snack.png';
import arrowRight from '../../images/diaryPageImages/arrow-right.svg';

import {
  Section,
  Container,
  MainHeaderBlock,
  BackLink,
  ArrowReturn,
  MainHeader,
  DiaryWrap,
  DiaryItem,
  BlockGeneralInfo,
  ThumbImg,
  Img,
  Title,
  BlockDetailedInformation,
  ListOfDishes,
  BlockHeader,
} from './DiaryPage.styled';
import { getStats } from '../../redux/statistics/statisticOperations';
import { useState } from 'react';

const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const day = today.getDate().toString().padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

const DiaryPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');
  const [foodIntakeArray, setFoodIntakeArray] = useState(null);
  const [lunchFoodIntake, setLunchFoodIntake] = useState([]);
  const [breakfastFoodIntake, setBreakfastFoodIntake] = useState([]);
  const [dinnerFoodIntake, setDinnerFoodIntake] = useState([]);
  const [snackFoodIntake, setSnackFoodIntake] = useState([]);

  const foodIntake = useSelector(selectFoodIntake);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getStats(formattedDate));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (foodIntake) {
      setFoodIntakeArray(foodIntake[0].stats.foodIntake);
      setLunchFoodIntake(foodIntake[0].stats.foodIntake.lunch);
      setBreakfastFoodIntake(foodIntake[0].stats.foodIntake.breakfast);
      setDinnerFoodIntake(foodIntake[0].stats.foodIntake.dinner);
      setSnackFoodIntake(foodIntake[0].stats.foodIntake.snack);
    }
    
  }, [foodIntake]);

  const consumedMacronutrients = useSelector(
    selectConsumedMacronutrientsPerDay
  );
  // const breakfastFoodIntake = useSelector(selectConsumedProductsForBreakfast);
  // console.log('breakfest', breakfastFoodIntake);
  // const lunchFoodIntake = useSelector(selectConsumedProductsForLunch);
  // // const lunchFoodIntake = foodIntakeArray.lunch;
  // console.log('lunch', lunchFoodIntake);
  // const dinnerFoodIntake = useSelector(selectConsumedProductsForDinner);
  // console.log('dinner', dinnerFoodIntake);
  // const snackFoodIntake = useSelector(selectConsumedProductsForSnack);
  // console.log('snack', snackFoodIntake);

  const {
    breakfast: breakfastInfo,
    lunch: lunchInfo,
    dinner: dinnerInfo,
    snack: snackInfo,
  } = consumedMacronutrients;

  return (
    <Section>
      <Container>
        <MainHeaderBlock>
          <BackLink to={backLinkLocationRef.current}>
            <ArrowReturn src={arrowRight} alt="arrow right" />
          </BackLink>
          <MainHeader>Diary</MainHeader>
        </MainHeaderBlock>

        <DiaryWrap>
          <DiaryItem>
            <BlockGeneralInfo>
              <BlockHeader>
                <ThumbImg>
                  <Img src={breakfastImg} alt="Plate" />
                </ThumbImg>
                <Title>Breakfast</Title>
              </BlockHeader>
              <ItemsToAdd info={breakfastInfo} />
            </BlockGeneralInfo>
            <BlockDetailedInformation>
              <ListOfDishes>
                {getArrayToRenderDiary(breakfastFoodIntake, 'Breakfast').map(
                  (item, index) => (
                    <ElementOfFood
                      item={item}
                      key={nanoid()}
                      index={index}
                      img={breakfastImg}
                    />
                  )
                )}
              </ListOfDishes>
            </BlockDetailedInformation>
          </DiaryItem>

          <DiaryItem>
            <BlockGeneralInfo>
              <BlockHeader>
                <ThumbImg>
                  <Img src={lunchImg} alt="Plate" />
                </ThumbImg>
                <Title>Lunch</Title>
              </BlockHeader>
              <ItemsToAdd info={lunchInfo} />
            </BlockGeneralInfo>
            <BlockDetailedInformation>
              <ListOfDishes>
                {getArrayToRenderDiary(lunchFoodIntake, 'Lunch').map(
                  (item, index) => (
                    <ElementOfFood
                      item={item}
                      key={nanoid()}
                      index={index}
                      img={lunchImg}
                    />
                  )
                )}
              </ListOfDishes>
            </BlockDetailedInformation>
          </DiaryItem>

          <DiaryItem>
            <BlockGeneralInfo>
              <BlockHeader>
                <ThumbImg>
                  <Img src={dinnerImg} alt="Plate" />
                </ThumbImg>
                <Title>Dinner</Title>
              </BlockHeader>
              <ItemsToAdd info={dinnerInfo} />
            </BlockGeneralInfo>
            <BlockDetailedInformation>
              <ListOfDishes>
                {getArrayToRenderDiary(dinnerFoodIntake, 'Dinner').map(
                  (item, index) => (
                    <ElementOfFood
                      item={item}
                      key={nanoid()}
                      index={index}
                      img={dinnerImg}
                    />
                  )
                )}
              </ListOfDishes>
            </BlockDetailedInformation>
          </DiaryItem>

          <DiaryItem>
            <BlockGeneralInfo>
              <BlockHeader>
                <ThumbImg>
                  <Img src={snackImg} alt="Plate" />
                </ThumbImg>
                <Title>Snack</Title>
              </BlockHeader>
              <ItemsToAdd info={snackInfo} />
            </BlockGeneralInfo>
            <BlockDetailedInformation>
              <ListOfDishes>
                {getArrayToRenderDiary(snackFoodIntake, 'Snack').map(
                  (item, index) => (
                    <ElementOfFood
                      item={item}
                      key={nanoid()}
                      index={index}
                      img={snackImg}
                    />
                  )
                )}
              </ListOfDishes>
            </BlockDetailedInformation>
          </DiaryItem>
        </DiaryWrap>
      </Container>
    </Section>
  );
};

export default DiaryPage;
