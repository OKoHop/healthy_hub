import { StyledSubtitle } from '../DailyGoal/DailyGoal.style';
import Calories from './Calories/Calories';
import Carbonohidrates from './Carbonohidrates/Carbonohidrates';
import Fat from './Fat/Fat';
import { CaloriesDiv, StyleDiv, StyledDiv } from './Food.style';
import Protein from './Protein/Protein';

const Food = () => {
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
