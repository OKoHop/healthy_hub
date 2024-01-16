import DailyGoal from '../../components/Today/DailyGoal/DailyGoal';
import Food from '../../components/Today/Food/Food';
import {
  Div,
  DivLink,
  H1,
  Link,
  SVG,
  Section,
  StyledDiv,
  StyledDiv2,
  Wrapper,
} from './Today.styled';
import Water from '../../components/Today/Water/Water';
import svgSlice from '../../images/Illustrations/Today/today-svg-sprite.svg';
import DiaryOnMain from '../../components/Diary/DiaryOnPage/DiaryOnMain';
import RecommendedFoodMain from '../../components/RecommendedFoodMain/RecommendedFoodMain';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  getDailyStatistics,
  getStatistics,
} from '../../redux/Today/Food/operations';
import { getStats } from '../../redux/statistics/statisticOperations';
import today from '../../helpers/todayData';

const Today = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDailyStatistics(today));
    dispatch(getStatistics(today));
    dispatch(getStats(today));
  }, [dispatch]);

  return (
    <Section>
      <div className="container">
        <Div>
          <H1>Today</H1>
          <Link to="/dashboard">
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
      </div>
      <div className="container">
        <Wrapper>
          <DiaryOnMain />
          <RecommendedFoodMain />
        </Wrapper>
      </div>
    </Section>
  );
};

export default Today;
