import { StyledSubtitle } from '../DailyGoal/DailyGoal.style';
import {
  StyledBtn,
  StyledDiagram,
  StyledDiv,
  StyledDiv2,
  StyledLeft,
  StyledNum,
  StyledP,
  StyledSpan,
  StyledSpan2,
  Thumb,
} from './Water.style';

const Water = () => {
  return (
    <Thumb>
      <StyledSubtitle>Water</StyledSubtitle>

      <StyledDiv>
        <StyledDiagram></StyledDiagram>
        <div>
          <StyledP>Water consumption</StyledP>
          <StyledDiv2>
            <StyledNum>
              1050 <StyledSpan>ml</StyledSpan>
            </StyledNum>
            <StyledLeft>
              left: <StyledSpan2>450</StyledSpan2> <StyledSpan>ml</StyledSpan>
            </StyledLeft>
          </StyledDiv2>
          <StyledBtn>Add water intake</StyledBtn>
        </div>
      </StyledDiv>
    </Thumb>
  );
};

export default Water;
