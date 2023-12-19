import DailyGoal from '../../components/Today/DailyGoal/DailyGoal';
import Food from '../../components/Today/Food/Food';
import {
  Div,
  DivLink,
  H1,
  SVG,
  Section,
  StyledDiv,
  StyledDiv2,
  Wrapper
} from './Today.style';
import Water from '../../components/Today/Water/Water';
import svgSlice from '../../images/Illustrations/Today/today-svg-sprite.svg';
import { Link } from 'react-router-dom';
import DiaryOnMain from '../../components/DiaryOnMain/DiaryOnMain';

import RecommendedFoodMain from '../../components/RecommendedFoodMain/RecommendedFoodMain';

const Today = () => {
  return (
    <Section>
      <div className="container">
        <Div>
          <H1>Today</H1>
          <Link href="">
            <DivLink>
              On the way to the goal
              <SVG>
                <use href={`${svgSlice}#arrow-right`}></use>
              </SVG>
            </DivLink>
          </Link>
        </Div>
        <StyledDiv>
          <StyledDiv2>
            <DailyGoal />
            <Water />
          </StyledDiv2>
          <Food />
        </StyledDiv>

        <Wrapper>
          {/* блок щоденник */}
          <DiaryOnMain />
        </Wrapper>
      </div>
      <div className="container">
        <RecommendedFoodMain />
      </div>
    </Section>
  );
};

export default Today;
