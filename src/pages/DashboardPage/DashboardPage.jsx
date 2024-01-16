import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

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

const DashboardPage = () => {
  const [date, setDate] = useState(null);

  const dispatch = useDispatch();

  return (
    <DashboardSection>
      <DashboardContainer>
        <HeaderBlock>
          <MainHeaderBlock>
            <BackLink />
            <StyledDatepicker />
          </MainHeaderBlock>
          <SecondHeader></SecondHeader>
        </HeaderBlock>
        <LineChartBlock>
          <ChartGrid>
            <CaloriesGraph date={date} setDate={setDate} />
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
