import { generateDaysArray } from '../../../helpers/generateDatesArray';
import {
  WeightBlock,
  WeightTitleBlock,
  WeightGraphBlock,
} from './WeightGraph.styled';

export const WeightGraph = ({ dateRange, stats }) => {
  let daysArray = generateDaysArray(dateRange);

  const initialData = daysArray.map((day) => ({ day, value: 0 }));
  const weightData = stats.reduce((result, item) => {
    if (item.stats && typeof item.stats.weight === 'number') {
      const day = new Date(item.date).getDate().toString();
      result.push({ day, value: item.stats.weight });
    }
    return result;
  }, []);
  const combineWeightData = initialData.map((initialItem) => {
    const matchingItem = weightData.find(
      (item) => item.day === initialItem.day
    );

    if (matchingItem) {
      return matchingItem;
    } else {
      return initialItem;
    }
  });

  const arrayOfGraphData = () => {
    return combineWeightData.map((item) => item.value);
  };
  const arraydata = arrayOfGraphData();

  console.log('arraydata', arraydata);

  const averageWeight = () => {
    const nonZeroWeights = combineWeightData.filter((item) => item.value !== 0);

    if (nonZeroWeights.length === 0) {
      return 0; // or any default value when there are no non-zero weights
    }

    const totalWeight = nonZeroWeights.reduce(
      (sum, item) => sum + item.value,
      0
    );

    return totalWeight / nonZeroWeights.length;
  };

  const avgWeight = averageWeight();

  return (
    <WeightBlock>
      <WeightTitleBlock>
        <h2>Weight</h2>
        <p>
          Average value: <span>{avgWeight} kg</span>
        </p>
      </WeightTitleBlock>
      <WeightGraphBlock>
        <ul>
          {arraydata.map((value, index) => (
            <li key={index}>
              <span>{value !== 0 ? value : '?'}</span>
              <span>{index + 1}</span>
            </li>
          ))}
        </ul>
      </WeightGraphBlock>
    </WeightBlock>
  );
};
