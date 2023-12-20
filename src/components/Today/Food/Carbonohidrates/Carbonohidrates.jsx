import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Div, Div2, Div3, P, P2, Span } from './Carbonohidrates.style';

ChartJS.register(ArcElement, Tooltip, Legend);

const Carbonohidrates = () => {
  const data = {
    datasets: [
      {
        data: [100, 200],
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
      const secondaryData = data.datasets[0].data[1];

      ctx.save();
      ctx.font = '400 14px sans-serif';
      ctx.fillStyle = '#B6B6B6';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${(primaryData / secondaryData) * 100}%`, xCoor, yCoor);
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
            left: <Span>0</Span>
          </P2>
        </Div3>
      </Div2>
    </Div>
  );
};

export default Carbonohidrates;
