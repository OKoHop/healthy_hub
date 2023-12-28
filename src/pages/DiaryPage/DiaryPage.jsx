import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import ItemsToAdd from '../../components/Diary/DiaryPageItemsToAdd/ItemsToAdd';
import ElementOfFood from '../../components/Diary/Diary/ElementOfFood';
import { selectFoodIntake } from '../../redux/statistics/statisticSelectors';

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

import MealButtonBlock from './MealBtnBlock';
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
} from '../../redux/Today/Diary/selectors';
import { fetchFoodStatistics } from '../../redux/Today/Diary/operations';

const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const day = today.getDate().toString().padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

const DiaryPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

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

  const backLinkLocationRef = useRef(location.state?.from ?? '/main');
  const [foodIntakeArray, setFoodIntakeArray] = useState(null);
  const [lunchFoodIntake, setLunchFoodIntake] = useState([]);
  const [breakfastFoodIntake, setBreakfastFoodIntake] = useState([]);
  const [dinnerFoodIntake, setDinnerFoodIntake] = useState([]);
  const [snackFoodIntake, setSnackFoodIntake] = useState([]);

  const [isRecordModalOpen, setIsRecordModalOpen] = useState(false);
  const [selectedMealType, setSelectedMealType] = useState({});

  const toggleModalRecord = (mealType) => {
    setSelectedMealType((prev) => ({
      ...prev,
      [mealType]: !prev[mealType],
    }));
    setIsRecordModalOpen(!isRecordModalOpen);
  };

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

  if (!foodIntakeArray) {
    return null;
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
              <ItemsToAdd
                carbonohidrates={breakfastCarbonohidrates}
                protein={breakfastProtein}
                fat={breakfastFat}
              />
            </BlockGeneralInfo>
            <BlockDetailedInformation>
              <ListOfDishes>
                {breakfastFoodIntake.map(
                  (item, index) =>
                    // Исключаем первый элемент завтрака из рендера
                    index !== 0 && (
                      <div key={nanoid()}>
                        <ElementOfFood
                          item={item}
                          index={index - 1}
                          mealType="Breakfast"
                        />
                      </div>
                    )
                )}
                <MealButtonBlock
                  mealType="Breakfast"
                  foodIntake={breakfastFoodIntake}
                  toggleModalRecord={toggleModalRecord}
                  image={breakfastImg}
                  isRecordModalOpen={selectedMealType['Breakfast']}
                />
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
              <ItemsToAdd
                carbonohidrates={lunchCarbonohidrates}
                protein={lunchProtein}
                fat={lunchFat}
              />
            </BlockGeneralInfo>
            <BlockDetailedInformation>
              <ListOfDishes>
                {lunchFoodIntake.map((item, index) => (
                  <ElementOfFood
                    item={item}
                    key={nanoid()}
                    index={index}
                    mealType="Lunch"
                  />
                ))}
                <MealButtonBlock
                  mealType="Lunch"
                  foodIntake={lunchFoodIntake}
                  toggleModalRecord={toggleModalRecord}
                  image={lunchImg}
                  isRecordModalOpen={selectedMealType['Lunch']}
                />
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
              <ItemsToAdd
                carbonohidrates={dinnerCarbonohidrates}
                protein={dinnerProtein}
                fat={dinnerFat}
              />
            </BlockGeneralInfo>
            <BlockDetailedInformation>
              <ListOfDishes>
                {dinnerFoodIntake.map((item, index) => (
                  <ElementOfFood
                    item={item}
                    key={nanoid()}
                    index={index}
                    mealType="Dinner"
                  />
                ))}
                <MealButtonBlock
                  mealType="Dinner"
                  foodIntake={dinnerFoodIntake}
                  toggleModalRecord={toggleModalRecord}
                  image={dinnerImg}
                  isRecordModalOpen={selectedMealType['Dinner']}
                />
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
              <ItemsToAdd
                carbonohidrates={snackCarbonohidrates}
                protein={snackProtein}
                fat={snackFat}
              />
            </BlockGeneralInfo>
            <BlockDetailedInformation>
              <ListOfDishes>
                {snackFoodIntake.map((item, index) => (
                  <ElementOfFood
                    item={item}
                    key={nanoid()}
                    index={index}
                    mealType="Snack"
                  />
                ))}
                <MealButtonBlock
                  mealType="Snack"
                  foodIntake={snackFoodIntake}
                  toggleModalRecord={toggleModalRecord}
                  image={snackImg}
                  isRecordModalOpen={selectedMealType['Snack']}
                />
              </ListOfDishes>
            </BlockDetailedInformation>
          </DiaryItem>
        </DiaryWrap>
      </Container>
    </Section>
  );
};

export default DiaryPage;
