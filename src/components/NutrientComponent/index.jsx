import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { NutrientBlock, NutrientInfo, NutrientName, NutrientStatistics } from './NutrientComponent.styled';


ChartJS.register(ArcElement, Tooltip, Legend);

export const NutrientComponent = (nutrientName, dailyGoalSelector, intakeSelector,intake, colors) => {
  const NutrientComponent = () => {
    const { user } = useAuth();
    const dailyGoal = user.nutrients[dailyGoalSelector];

    const nutrients = useSelector(intakeSelector);
    const nutrientIntake =nutrients ? nutrients[intake]:null;

    const remainder = (dailyGoal, nutrientIntake) => {
      if (!isNaN(dailyGoal) && !isNaN(nutrientIntake)) {
        return Math.max(dailyGoal - nutrientIntake, 0);
      } else {
        return 0;
      }
    };

    const percent = (dailyGoal, nutrientIntake) => {
      if (isNaN(Math.round((nutrientIntake / dailyGoal) * 100))) return 0;
      return Math.round((nutrientIntake / dailyGoal) * 100);
    };

    const percentLeft = (callback) => {
      return 100 - callback;
    };

    const data = {
      datasets: [
        {
          data: [
            percent(dailyGoal, nutrientIntake),
            percentLeft(percent(dailyGoal, nutrientIntake)),
          ],
          backgroundColor: colors,
          borderWidth: 0,
          borderRadius: 14,
          circumference: 360,
          cutout: '80%',
        },
      ],
    };

    const textCenter = {
      id: 'textCenter',
      beforeDatasetsDraw(chart) {
        const { ctx, data } = chart;
        const xCoor = chart.getDatasetMeta(0).data[0].x;
        const yCoor = chart.getDatasetMeta(0).data[0].y;

        const primaryData = data.datasets[0].data[0];

        ctx.save();
        ctx.font = '400 14px sans-serif';
        ctx.fillStyle = '#B6B6B6';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${primaryData}%`, xCoor, yCoor);
      },
    };

    return (
      <NutrientBlock>
        <Doughnut data={data} plugins={[textCenter]}></Doughnut>
        <NutrientInfo>
          <NutrientName>{nutrientName}</NutrientName>
          <NutrientStatistics>
            <p>
              Goal: <span>{dailyGoal}</span>
            </p>
            <p>
              left: <span>{remainder(dailyGoal, nutrientIntake)}</span>
            </p>
          </NutrientStatistics>
        </NutrientInfo>
      </NutrientBlock>
    );
  };

  return NutrientComponent;
};

