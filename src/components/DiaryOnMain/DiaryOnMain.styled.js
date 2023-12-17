import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`;

export const Title = styled.h2`
  color: #FFFFFF;
  /* font-family: 'Poppins', sans-serif; */
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const DiaryLink = styled(Link)`
  color: #B6B6B6;
  /* font-family: 'Poppins', sans-serif; */
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const CardsWrap = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`;
