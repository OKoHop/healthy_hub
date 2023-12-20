import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Div, Div2, Div3, P, P2, Span } from './Fat.style';
import { useSelector } from 'react-redux';
import { fat } from '../../../../redux/Today/Food/selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

const Fat = () => {
  const dailyFat = useSelector(fat);
  const receivedFat = 50;

  const leftFat = (dailyFat, receivedFat) => {
    return dailyFat - receivedFat;
  };

  const percent = (dailyFat, receivedFat) => {
    return Math.round((receivedFat / dailyFat) * 100);
  };

  const percentLeft = (callback) => {
    return 100 - callback;
  };

  const data = {
    datasets: [
      {
        data: [
          percent(dailyFat, receivedFat),
          percentLeft(percent(dailyFat, receivedFat)),
        ],
        backgroundColor: ['#FFF3B7', '#292928'],
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
    <Div>
      <Doughnut data={data} plugins={[textCenter]}></Doughnut>
      <Div2>
        <P>Fat</P>
        <Div3>
          <P2>
            Goal: <Span>0</Span>
          </P2>
          <P2>
            left: <Span>{leftFat(dailyFat, receivedFat)}</Span>
          </P2>
        </Div3>
      </Div2>
    </Div>
  );
};

export default Fat;
