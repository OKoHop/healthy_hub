import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {
  Overflow,
  CaloriesAverageNumber,
  CaloriesAverageTitle,
  CaloriesHeader,
  CaloriesHeadingWrapper,
  CaloriesSectionWrapper,
  СaloriesGraphWrapper,
  ScrollerWrapper,
  HeaderData,
} from './CaloriesGraph.styled';

import { generateDaysArray } from '../../../helpers/generateDatesArray';

export const CaloriesGraph = ({ dateRange, stats }) => {
  let daysArray = generateDaysArray(dateRange);

  const labels = daysArray;

  const caloriesIntakeArray = stats.map((item) =>
    item.stats ? item.stats.totalCalories || 0 : 0
  );

  const initialCaloriesIntakeData = labels.map((day) => ({ day, value: 0 }));

  const caloriesIntakeData = stats.reduce((result, item) => {
    if (item.stats) {
      result.push({
        day: new Date(item.date).getDate().toString(),
        value: item.stats.totalCalories || 0,
      });
    }
    return result;
  }, []);

  const combinedCaloriesIntakeData = initialCaloriesIntakeData.map(
    (initialItem) => {
      const matchingItem = caloriesIntakeData.find(
        (item) => item.day === initialItem.day
      );

      if (matchingItem) {
        return matchingItem;
      } else {
        return initialItem;
      }
    }
  );

  const maxNumber = Math.max(...caloriesIntakeArray);

  const arrayOfGraphData = () => {
    return combinedCaloriesIntakeData.map((item) => item.value);
  };

  const maxOnGraph = () => {
    const defaultMinimum = 3000;
    if (maxNumber < defaultMinimum) {
      return defaultMinimum;
    }
    const roundedNumber = Math.ceil(maxNumber / 1000) * 1000;
    return roundedNumber;
  };

  const averageCalories = () => {
    const totalCalories = combinedCaloriesIntakeData.reduce(
      (sum, item) => sum + item.value,
      0
    );

    return totalCalories / combinedCaloriesIntakeData.length;
  };

  const avgCalories = averageCalories();

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: maxOnGraph(),
        grid: {
          color: '#292928',
        },
        gridLines: {
          display: false,
          color: '#B6B6B6',
        },
        ticks: {
          stepSize: 1000,
          color: '#B6B6B6',
          callback: function (value) {
            if (String(value).length === 1) {
              return value;
            }
            return String(value / 1000) + `K`;
          },
        },
      },
      x: {
        grid: {
          color: '#292928',
        },
        ticks: {
          color: '#B6B6B6',
        },
        scales: {
          x: {
            min: 0,
            max: 100,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        cornerRadius: 8,
        caretSize: 0,
        padding: 10,
        borderColor: 'rgba(227, 255, 168, 0.1)',
        borderWidth: 3,
        backgroundColor: '#0f0f0f',
        titleFont: {
          weight: 'bold',
          size: 32,
          color: 'white',
        },
        displayColors: false,
        yAlign: 'bottom',
        xAlign: 'auto',
        bodyFont: {
          size: 32,
        },
        footerFont: {
          size: 16,
        },
        footerAlign: 'center',
        labelAlign: 'center',
        callbacks: {
          title: () => null,
          label: (context) => context.raw,
          footer: () => 'calories',
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Calories',
        fill: false,
        showLine: true,
        borderColor: '#e3ffa8',
        borderWidth: 1,
        tension: 0.4,
        pointRadius: 0,
        pointBorderColor: '#e3ffa8',
        pointHoverRadius: 3,
        pointHitRadius: 12,
        pointBackgroundColor: '#e3ffa8',
        data: arrayOfGraphData(),
      },
    ],
  };

  return (
    <CaloriesSectionWrapper>
      <CaloriesHeadingWrapper>
        <CaloriesHeader>Calories</CaloriesHeader>
        {avgCalories ? (
          <HeaderData>
            <CaloriesAverageTitle>Average value:</CaloriesAverageTitle>
            <CaloriesAverageNumber>
              {avgCalories.toFixed(0)} cal
            </CaloriesAverageNumber>
          </HeaderData>
        ) : (
          <HeaderData>
            <CaloriesAverageTitle>Average value:</CaloriesAverageTitle>
          </HeaderData>
        )}
      </CaloriesHeadingWrapper>
      <ScrollerWrapper>
        <Overflow>
          <СaloriesGraphWrapper>
            <Line options={options} data={data} />
          </СaloriesGraphWrapper>
        </Overflow>
      </ScrollerWrapper>
    </CaloriesSectionWrapper>
  );
};
