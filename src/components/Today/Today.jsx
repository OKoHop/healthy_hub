import DailyGoal from './DailyGoal/DailyGoal';
import Food from './Food/Food';
import Water from './Water/Water';

const Today = () => {
  return (
    <>
      <div>
        <h3>Today</h3>
        <a href="">On the way to the goal</a>
      </div>
      <div>
        <DailyGoal />
        <Water />
        <Food />
      </div>
    </>
  );
};

export default Today;
