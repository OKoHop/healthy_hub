import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
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
import today from '../../helpers/todayData';
import { calculateTotal } from '../../helpers/calculateTotalIngridients';

const DiaryPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');

  const [lunchFoodIntake, setLunchFoodIntake] = useState([]);
  const [breakfastFoodIntake, setBreakfastFoodIntake] = useState([]);
  const [dinnerFoodIntake, setDinnerFoodIntake] = useState([]);
  const [snackFoodIntake, setSnackFoodIntake] = useState([]);

  const foodIntake = useSelector(selectFoodIntake);
  const test = useSelector(selectStatsInfo);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getStats(today));
      } catch (error) {
        toast.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (foodIntake) {
      setLunchFoodIntake(foodIntake.foodIntake.lunch);
      setBreakfastFoodIntake(foodIntake.foodIntake.breakfast);
      setDinnerFoodIntake(foodIntake.foodIntake.dinner);
      setSnackFoodIntake(foodIntake.foodIntake.snack);
    }
  }, [foodIntake]);

console.log(breakfastFoodIntake);
const removeNullDishObjects = (array) =>{
  const filteredArray = array.filter(item => item.dish !== null);
  return filteredArray;
}

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
              <ItemsToAdd info={calculateTotal(breakfastFoodIntake)} />
            </BlockGeneralInfo>
            <BlockDetailedInformation>
              <ListOfDishes>
                {getArrayToRenderDiary(removeNullDishObjects(breakfastFoodIntake), 'Breakfast').map(
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
              <ItemsToAdd info={calculateTotal(lunchFoodIntake)} />
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
              <ItemsToAdd info={calculateTotal(dinnerFoodIntake)} />
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
              <ItemsToAdd info={calculateTotal(snackFoodIntake)} />
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
