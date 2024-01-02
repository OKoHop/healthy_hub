import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${(props) => props.theme.colors.primaryBlack};
  color: ${(props) => props.theme.colors.primaryWhite};
  font-family: 'Poppins', sans-serif;

  padding-top: 16px;
  padding-bottom: 40px;

  @media screen and (min-width: 320px) {
    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 320px;
  padding: 0 10px;

  @media screen and (min-width: 834px) {
    width: 834px;
    padding: 0 27px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 34px;
  }
`;

export const HeaderPage = styled.header`
  display: flex;
  margin-bottom: 16px;
`;

export const BackLink = styled(NavLink)`
  display: flex;
  margin-right: 8px;

  @media screen and (min-width: 834px) {
    margin-right: 12px;
  }
`;

export const ArrowReturn = styled.img`
  width: 16px;
  svg {
    &:hover {
      stroke: ${(p) => p.theme.colors.primaryWhite};
    }
  }
  transition: ${(p) => p.theme.transition.customTrans};

  @media screen and (min-width: 834px) {
    width: 24px;
  }
`;

export const TitlePage = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 44px;
    align-items: start;
    justify-content: flex-end;
  }
`;

export const Img = styled.img`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 536px;
  }
`;

export const RecommendedFoodList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1440px) {
    width: 676px;
  }
`;
