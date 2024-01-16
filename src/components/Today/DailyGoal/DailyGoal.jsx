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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../../../redux/Today/Daily/operations';
import { calories, water } from '../../../redux/Today/Daily/selectors';

const DailyGoal = () => {
  const dispatch = useDispatch();
  const cal = useSelector(calories);
  const wat = useSelector(water);

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
            <StyledP>{cal && Math.round(cal)}</StyledP>
          </div>
        </StyledDiv2>
        <StyledDiv2>
          <WaterSvg>
            <use href={`${svgSlice}#water`}></use>
          </WaterSvg>
          <div>
            <StyledH3>Water</StyledH3>
            <StyledP>
              {wat && Math.round(wat)} <StyledSpan>ml</StyledSpan>
            </StyledP>
          </div>
        </StyledDiv2>
      </StyledDiv>
    </Thumb>
  );
};

export default DailyGoal;
