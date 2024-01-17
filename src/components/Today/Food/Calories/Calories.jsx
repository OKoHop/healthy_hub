import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useDispatch, useSelector } from 'react-redux';
import { calories } from '../../../../redux/Today/Daily/selectors';
import { dailyCal } from '../../../../redux/Today/Food/selectors';
import { useAuth } from '../../../../hooks/useAuth';

ChartJS.register(ArcElement, Tooltip, Legend);

const Calories = () => {
  const { user } = useAuth();
  const calDaily = useSelector(calories);
  const calReceived = useSelector(dailyCal);
  console.log(calDaily,calReceived);

  const remainingCalories = (calReceived, calDaily) => {
    if (!calDaily && !calReceived) {
      return 0;
    }
    return calDaily - calReceived;
  };

  const receivedCal = (calReceived) => {
    if (!calReceived) {
      return 0;
    }
    return calReceived;
  };

  const data = {
    datasets: [
      {
        data: [
          receivedCal(calReceived),
          remainingCalories(calReceived, calDaily),
        ],
        backgroundColor: ['#45FFBC', '#292928'],
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

      ctx.save();
      ctx.font = '500 32px sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(data.datasets[0].data[0], xCoor, yCoor - 10);

      ctx.font = '400 14px sans-serif';
      ctx.fillStyle = '#B6B6B6';
      ctx.fillText('calories', xCoor, yCoor + 20);
    },
  };

  const backgroundCirgle = {
    id: 'backgroundCirgle',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      ctx.save();

      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
      const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
      const width = outerRadius - innerRadius;
      const angle = Math.PI / 180;

      ctx.beginPath();
      ctx.strokeStyle = '#292928';
      ctx.lineWidth = width;
      ctx.arc(xCoor, yCoor, outerRadius - width / 2, 0, angle * 360, false);
      ctx.stroke();
    },
  };

  return <Doughnut data={data} plugins={[textCenter, backgroundCirgle]} />;
};

export default Calories;
