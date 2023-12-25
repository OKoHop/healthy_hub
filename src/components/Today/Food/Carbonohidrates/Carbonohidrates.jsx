import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Div, Div2, Div3, P, P2, Span } from './Carbonohidrates.style';
import { useSelector } from 'react-redux';
import {
  carbonohidrates,
  totalCarbohidrates,
} from '../../../../redux/Today/Food/selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

const Carbonohidrates = () => {
  const dailyCarb = useSelector(carbonohidrates) || 0;
  const receivedCarb = useSelector(totalCarbohidrates) || 0;

  const leftCarb = (dailyCarb, receivedCarb) => {
    if (dailyCarb - receivedCarb === null) {
      return 0;
    }
    return dailyCarb - receivedCarb;
  };

  const percent = (dailyCarb, receivedCarb) => {
    return Math.round((receivedCarb / dailyCarb) * 100);
  };

  const percentLeft = (callback) => {
    return 100 - callback;
  };

  const data = {
    datasets: [
      {
        data: [
          percent(dailyCarb, receivedCarb),
          percentLeft(percent(dailyCarb, receivedCarb)),
        ],
        backgroundColor: ['#FFC4F7', '#292928'],
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
        <P>Carbonohidrates</P>
        <Div3>
          <P2>
            Goal: <Span>0</Span>
          </P2>
          <P2>
            left: <Span>{leftCarb(dailyCarb, receivedCarb)}</Span>
          </P2>
        </Div3>
      </Div2>
    </Div>
  );
};

export default Carbonohidrates;
