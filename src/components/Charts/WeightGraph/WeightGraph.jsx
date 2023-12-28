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
import { ScrollerWrapper, Overflow, WeightAverageNumber, WeightAverageTitle, WeightHeader, WeightHeadingWrapper, WeightSectionhWrapper, WeightGraphWrapper, WeightArrayList, MonthArrayList, WeightArrayItem, MonthArrayItem, HeaderData } from './WeightGraph.styled';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getStats } from '../../../redux/statistics/statisticOperations';

export const WeightGraph = ({date}) => {
  const dispatch = useDispatch()
  const [weight, setWeight] = useState({}); 
  const [weightCap, setWeightCap] = useState([])
  

  useEffect(() => {
    const fetchData = async () => {
    if (date !== null) {
        try {
          const data = await dispatch(getStats(date));
          setWeight(data.payload);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
    fetchData(date)
  }, [date])
  
  useEffect(() => {
    if (Object.keys(weight).length) {
      const dataCap = numberOfDay => {
        if (weight.weightPerDay.length !== 0) {
          const foundItem = weight.weightPerDay.find(el => numberOfDay + 1 === el.day);
          if (foundItem) {
            return foundItem.weight;
          } else {
            return 0;
          }
        }
        else {
          return 0;
        }
      }
      const weightCapFu = () => {
        const countOfDays = daysArray.length
        const dataArray = []
        for (let i = 0; i < countOfDays; i += 1) {
          if (dataCap(i) !== 0) {
            const foundItem = dataCap(i)
            if (foundItem) {
              dataArray.push(foundItem)
            } else {
              dataArray.push(0)
            }
          }
          else {
            const indexOfTheLastOne = dataArray.length - 1
            const theLastOneWalue = dataArray[indexOfTheLastOne]
            if (dataArray.length !== 0 && theLastOneWalue !== 0) {
              dataArray.push(theLastOneWalue)
            } else {
              dataArray.push(0)
            }
           
          }
        }
        setWeightCap(dataArray)
      }  
      weightCapFu()
    } else {
  }
}, [weight])

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

  const numberOfDaysInTheMonth = (date) => {

    let monthNumberTested 

    if (date !== new Date().getMonth()) {
      monthNumberTested = new Date().getDate()
    } else {
      monthNumberTested = new Date(2023, date, 0).getDate();
    }
    const daysArray = Array.from({ length: monthNumberTested }, (_, index) => (index + 1).toString());
    return daysArray 
  }

  const daysArray = numberOfDaysInTheMonth(date)

  const monthArray = () => {
    if (daysArray.length !== 0) {
      return (
        <MonthArrayList>
          {daysArray.map((el) => (
            <MonthArrayItem key={el}>{el}</MonthArrayItem>
          ))}
        
        </MonthArrayList>
      )}
    return null;
  }




  
  const weightArray = () => {
    const weightArr = weightCap
    if (weightArr.length !== 0) {
      return (
        <WeightArrayList>
          {weightArr.map((el) => (
            <WeightArrayItem key={Math.random()}>{el}</WeightArrayItem>
          ))}
        
        </WeightArrayList>
      )}
    return (<div></div>);
  }

  return (
    <WeightSectionhWrapper>
      <WeightHeadingWrapper>
          <WeightHeader>Weight</WeightHeader>
          {weight.avgWeight ?
            (<HeaderData>
              <WeightAverageTitle>Average value:</WeightAverageTitle>
              <WeightAverageNumber>{weight.avgWeight.toFixed(0)}kg</WeightAverageNumber>
            </HeaderData>) :
            (<HeaderData>
              <WeightAverageTitle>Average value:</WeightAverageTitle>
              <WeightAverageNumber>no added data yet</WeightAverageNumber>
            </HeaderData>)
            }
      </WeightHeadingWrapper>
      <ScrollerWrapper>
        <Overflow>
          <WeightGraphWrapper>
              {weightArray()}
              {monthArray()}
          </WeightGraphWrapper>
        </Overflow>
      </ScrollerWrapper>
    </WeightSectionhWrapper>
  )   
}
