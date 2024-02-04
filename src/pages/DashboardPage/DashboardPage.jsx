import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StyledDatepicker from '../../components/StyledDatepicker/StyledDatepicker';
import { WaterGraph } from '../../components/Charts/WaterGraph/WaterGraph';
import { CaloriesGraph } from '../../components/Charts/CaloriesGraph/CaloriesGraph';
import { WeightGraph } from '../../components/Charts/WeightGraph/WeightGraph';

import {
  DashboardSection,
  DashboardContainer,
  HeaderBlock,
  MainHeaderBlock,
  SecondHeader,
  LineChartBlock,
  ChartGrid,
  ScaleChartBlock,
} from './DashboardPage.styled';
import BackLink from '../../components/BackLink';
import { getStatsForPeriod } from '../../redux/statistics/statisticOperations';
import { selectInfo } from '../../redux/statistics/statisticSelectors';

const DashboardPage = () => {
  const [dateRange, setDateRange] = useState(null);
  const dispatch = useDispatch();
  const statsInfo = useSelector(selectInfo);

  useEffect(() => {
    const fetchDataAndUpdate = async () => {
      try {
        await dispatch(getStatsForPeriod(dateRange));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (dateRange) {
      fetchDataAndUpdate();
    }
  }, [dispatch, dateRange]);

  return (
    <DashboardSection>
      <DashboardContainer>
        <HeaderBlock>
          <MainHeaderBlock>
            <BackLink />
            <StyledDatepicker onDateRangeChange={setDateRange} />
          </MainHeaderBlock>
          <SecondHeader></SecondHeader>
        </HeaderBlock>
        <LineChartBlock>
          <ChartGrid>
            <CaloriesGraph dateRange={dateRange} stats={statsInfo} />
          </ChartGrid>
          <ChartGrid>
            <WaterGraph dateRange={dateRange} stats={statsInfo} />
          </ChartGrid>
        </LineChartBlock>
        <ScaleChartBlock>
          <WeightGraph dateRange={dateRange} stats={statsInfo} />
        </ScaleChartBlock>
      </DashboardContainer>
    </DashboardSection>
  );
};

export default DashboardPage;
