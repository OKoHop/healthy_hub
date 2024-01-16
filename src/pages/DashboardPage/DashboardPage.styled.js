import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DashboardSection = styled.section`
  background-color: #050505;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
`;

export const DashboardContainer = styled.div`
  margin: 0 auto;
  @media screen and (${(props) => props.theme.mq.mobMin}) {
    width: 320px;
    padding: 16px 10px 60px;
  }
  @media screen and (${(props) => props.theme.mq.tabMin}) {
    width: 834px;
    padding: 24px 27px 60px;
  }
  @media screen and (${(props) => props.theme.mq.deskMin}) {
    width: 1440px;
    padding: 20px 34px 40px;
  }
`;

export const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const MainHeaderBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Header = styled.h1`
  font-weight: 500;

  @media screen and (${(props) => props.theme.mq.mobMin}) {
    font-size: 24px;
    line-height: 1.25;
  }
  @media screen and (${(props) => props.theme.mq.tabMin}) {
    font-size: 30px;
    line-height: 1.2;
  }
`;

export const SecondHeader = styled.h3`
  font-weight: 500;

  @media screen and (${(props) => props.theme.mq.mobMin}) {
    font-size: 16px;
    line-height: 1.38;
  }
  @media screen and (${(props) => props.theme.mq.tabMin}) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const LineChartBlock = styled.div`
  display: flex;
  @media screen and (${(props) => props.theme.mq.mobMin}) {
    flex-direction: column;
  }
  @media screen and (${(props) => props.theme.mq.deskMin}) {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
  }
`;

export const ChartGrid = styled.div`
  @media screen and (${(props) => props.theme.mq.mobMin}) {
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    &:not(:last-child) {
      margin-bottom: 27px;
    }
  }
  @media screen and (${(props) => props.theme.mq.tabMin}) {
    display: imline-block;
    overflow-x: hidden;
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
`;

export const ScaleChartBlock = styled.div`
  @media screen and (${(props) => props.theme.mq.mobMin}) {
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    margin-top: 27px;
  }
  @media screen and (${(props) => props.theme.mq.tabMin}) {
    margin-top: 40px;
    overflow-x: hidden;
  }
  @media screen and (${(props) => props.theme.mq.deskMin}) {
    margin-top: 20px;
  }
`;
