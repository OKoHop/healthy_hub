import { useDispatch } from 'react-redux';
import { StyledSubtitle } from '../DailyGoal/DailyGoal.styled';
import Calories from './Calories/Calories';
import Carbonohidrates from './Carbonohidrates/Carbonohidrates';
import Fat from './Fat/Fat';
import { CaloriesDiv, StyleDiv, StyledDiv } from './Food.styled';
import Protein from './Protein/Protein';
import { useEffect } from 'react';
import { getStatistics } from '../../../redux/Today/Food/operations';

const Food = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatistics());
  });

  return (
    <div>
      <StyledSubtitle>Food</StyledSubtitle>

      <StyledDiv>
        <CaloriesDiv>
          <Calories />
        </CaloriesDiv>
        <StyleDiv>
          <Carbonohidrates />
          <Protein />
          <Fat />
        </StyleDiv>
      </StyledDiv>
    </div>
  );
};

export default Food;
