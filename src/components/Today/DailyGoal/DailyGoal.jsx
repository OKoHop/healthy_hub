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
} from './DailyGoal.style';
import svgSlice from '../../../images/Today/today-svg-sprite.svg';

const DailyGoal = () => {
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
            <StyledP>1700</StyledP>
          </div>
        </StyledDiv2>
        <StyledDiv2>
          <WaterSvg>
            <use href={`${svgSlice}#water`}></use>
          </WaterSvg>
          <div>
            <StyledH3>Water</StyledH3>
            <StyledP>
              1500 <StyledSpan>ml</StyledSpan>
            </StyledP>
          </div>
        </StyledDiv2>
      </StyledDiv>
    </Thumb>
  );
};

export default DailyGoal;
