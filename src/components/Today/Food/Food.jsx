import { StyledSubtitle } from '../DailyGoal/DailyGoal.style';
import Calories from './Calories/Calories';
import Carbonohidrates from './Carbonohidrates/Carbonohidrates';
import Fat from './Fat/Fat';
import { CaloriesDiv, StyledDiv } from './Food.style';
import Protein from './Protein/Protein';

const Food = () => {
  return (
    <div>
      <StyledSubtitle>Food</StyledSubtitle>

      <StyledDiv>
        <CaloriesDiv>
          <Calories />
        </CaloriesDiv>
        <div>
          <Carbonohidrates />
          <Protein />
          <Fat />
        </div>
      </StyledDiv>
    </div>
  );
};

export default Food;
