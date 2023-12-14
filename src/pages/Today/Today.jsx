import DailyGoal from '../../components/Today/DailyGoal/DailyGoal';
import Food from '../../components/Today/Food/Food';
import { StyledDiv, StyledDiv2 } from './Today.style';
import Water from '../../components/Today/Water/Water';

const Today = () => {
  return (
    <div className="container">
      <div>
        <h3>Today</h3>
        <a href="">
          On the way to the goal
          <svg>
            <path
              stroke="#B6B6B6"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.24 7.906l8.094 8.094-8.094 8.092M4.666 16h22.44"
            ></path>
          </svg>
        </a>
      </div>
      <StyledDiv>
        <StyledDiv2>
          <DailyGoal />
          <Water />
        </StyledDiv2>
        <Food />
      </StyledDiv>
    </div>
  );
};

export default Today;
