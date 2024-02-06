import {
  BubleSvg,
  StyledDiv,
  StyledDiv2,
  StyledH3,
  StyledP,
  StyledSpan,
  StyledSubtitle,
  Thumb,
  WaterSvg,
} from './DailyGoal.styled';
import svgSlice from '../../../images/Illustrations/Today/today-svg-sprite.svg';
import { useAuth } from '../../../hooks/useAuth';

const DailyGoal = () => {
  const { user } = useAuth();

  return (
    <Thumb>
      <StyledSubtitle>Daily goal</StyledSubtitle>

      <StyledDiv>
        <StyledDiv2>
          <BubleSvg>
            <use href={`${svgSlice}#bubble`}></use>
          </BubleSvg>
          <div>
            <StyledH3>Calories</StyledH3>
            <StyledP> {Math.round(user.bmr)}</StyledP>
          </div>
        </StyledDiv2>
        <StyledDiv2>
          <WaterSvg>
            <use href={`${svgSlice}#water`}></use>
          </WaterSvg>
          <div>
            <StyledH3>Water</StyledH3>
            <StyledP>
              { Math.round(user.water)} <StyledSpan>ml</StyledSpan>
            </StyledP>
          </div>
        </StyledDiv2>
      </StyledDiv>
    </Thumb>
  );
};

export default DailyGoal;
