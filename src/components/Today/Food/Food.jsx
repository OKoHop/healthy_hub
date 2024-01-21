import { useDispatch } from 'react-redux';
import { StyledSubtitle } from '../DailyGoal/DailyGoal.styled';
import Calories from './Calories';
import { CaloriesDiv, StyleDiv, StyledDiv } from './Food.styled';
import { useEffect } from 'react';
import { getStatistics } from '../../../redux/Today/Food/operations';
import { selectFoodIntake } from '../../../redux/statistics/statisticSelectors';
import {  NutrientComponent } from '../../NutrientComponent';

const CarbohydratesComponent = NutrientComponent('Carbohydrates', 'carbonohidrates', selectFoodIntake, 'totalCarbohidrates',['#FFC4F7', '#292928']);
const ProteinComponent = NutrientComponent('Protein', 'protein', selectFoodIntake, 'totalProtein',['#B6B6B6', '#292928']);
const FatComponent = NutrientComponent('Fat', 'fat', selectFoodIntake, 'totalFat',['#FFF3B7', '#292928']);

const Food = () => {
/*   const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getStatistics());
  }); */

  return (
    <div>
      <StyledSubtitle>Food</StyledSubtitle>

      <StyledDiv>
        <CaloriesDiv>
          <Calories />
        </CaloriesDiv>
        <StyleDiv>
          <CarbohydratesComponent/>
          <ProteinComponent />
          <FatComponent />
        </StyleDiv>
      </StyledDiv>
    </div>
  );
};

export default Food;
