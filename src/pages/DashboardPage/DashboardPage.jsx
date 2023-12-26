import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStats } from '../../redux/statistics/statisticOperations';
import {
  selectStatsIsLoading,
  selectStatsInfo,
} from '../../redux/statistics/statisticSelectors';
import { Loader } from '../../components/Loader/Loader';
import DateRangePicker from '../../components/StyledDatepicker/StyledDatepicker';
import LineChart from '../../components/Charts/LineChart';
import ScaleChart from '../../components/Charts/ScaleChart';
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

const DashboardPage = () => {
  const currentDate = new Date();
  const nextMonthDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    currentDate.getDate()
  );

  const [dateRange, setDateRange] = useState({
    startDate: currentDate,
    endDate: nextMonthDate,
  });
  const isLoading = useSelector(selectStatsIsLoading);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/today');
  const dispatch = useDispatch();

  const stats = useSelector(selectStatsInfo);
  useEffect(() => {
    dispatch(getStats(dateRange.startDate, dateRange.endDate));
  }, [dispatch, dateRange]);

  const handleDateChange = (startDate, endDate) => {
    const formattedStartDate = startDate.toISOString();
    const formattedEndDate = endDate.toISOString();

    setDateRange({
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    });
  };

  return (
    <DashboardSection>
      <DashboardContainer>
        {isLoading && <Loader />}
        <HeaderBlock>
          <MainHeaderBlock>
            <BackLink
              onClick={() => dispatch(getStats('main'))}
              to={backLinkLocationRef.current}
            >
              <ArrowReturn src={arrowLeft} alt="arrow left" />
            </BackLink>
            <DateRangePicker
              startDate={dateRange.startDate}
              endDate={dateRange.endDate}
              onDateChange={handleDateChange}
            />
          </MainHeaderBlock>
          <SecondHeader>{currentDate.getMonth() + 1}</SecondHeader>
        </HeaderBlock>
        <LineChartBlock>
          <ChartGrid>
            <LineChart type={'calories'} info={stats} />
          </ChartGrid>
          <ChartGrid>
            <LineChart type={'water'} info={stats} />
          </ChartGrid>
        </LineChartBlock>
        <ScaleChartBlock>
          <ScaleChart type={'weight'} info={stats} />
        </ScaleChartBlock>
      </DashboardContainer>
    </DashboardSection>
  );
};

export default DashboardPage;
