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
} from './Today.style';
import Water from '../../components/Today/Water/Water';
import svgSlice from '../../images/Today/today-svg-sprite.svg';
import { Link } from 'react-router-dom';

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
      </div>
    </Section>
  );
};

export default Today;
