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
import svgSlice from '../../../images/Illustrations/Today/today-svg-sprite.svg';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../../../redux/Today/Daily/operations';

const DailyGoal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

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
