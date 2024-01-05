import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStats } from '../../redux/statistics/statisticOperations';

import StyledDatepicker from '../../components/StyledDatepicker/StyledDatepicker';
import { WaterGraph } from '../../components/Charts/WaterGraph/WaterGraph';
import { CaloriesGraph } from '../../components/Charts/CaloriesGraph/CaloriesGraph';
import { WeightGraph } from '../../components/Charts/WeightGraph/WeightGraph';

import arrowLeft from '../../images/arrow-left.svg';
import { useLocation } from 'react-router-dom';
import {
  DashboardSection,
  DashboardContainer,
  HeaderBlock,
  MainHeaderBlock,
  BackLink,
  ArrowReturn,
  SecondHeader,
  LineChartBlock,
  ChartGrid,
  ScaleChartBlock,
} from './DashboardPage.styled';
import { selectDateIntake, selectIsLoading } from '../../redux/statistics/statisticSelectors';

const DashboardPage = () => {
  const [date, setDate] = useState(null);

  const dataIntake = useSelector(selectDateIntake);
  const isLoading = useSelector(selectIsLoading);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');
  const dispatch = useDispatch();

  return (
    <DashboardSection>
      <DashboardContainer>
        <HeaderBlock>
          <MainHeaderBlock>
            <BackLink
              onClick={() => dispatch(getStats('today'))}
              to={backLinkLocationRef.current}
            >
              <ArrowReturn src={arrowLeft} alt="arrow left" />
            </BackLink>
            <StyledDatepicker />
          </MainHeaderBlock>
          <SecondHeader></SecondHeader>
        </HeaderBlock>
        <LineChartBlock>
          <ChartGrid>
            <CaloriesGraph date={date} setDate={setDate} dataIntake={dataIntake} />
          </ChartGrid>
          <ChartGrid>
            <WaterGraph date={date} setDate={setDate} />
          </ChartGrid>
        </LineChartBlock>
        <ScaleChartBlock>
          <WeightGraph date={date} setDate={setDate} />
        </ScaleChartBlock>
      </DashboardContainer>
    </DashboardSection>
  );
};

export default DashboardPage;
