import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowRight } from '../../images/arrow-right.svg';

export const RecommendedFoodSection = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }
`;

export const TitleSection = styled.h2`
  margin-top: 16px;
  margin-bottom: 16px;
  font-family: 'Poppins', sans-serif;
  color: ${(props) => props.theme.colors.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
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
`;

export const SeeMoreButton = styled(Link)`
  margin-top: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${(props) => props.theme.colors.primaryGray};
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  transition: ${(p) => p.theme.transition.customTrans};
  &:hover {
    color: ${(p) => p.theme.colors.primaryWhite};
  }
  @media screen and (min-width: 834px) {
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const StyledArrowRight = styled(ArrowRight)`
  stroke: ${(props) => props.theme.colors.primaryGray};
  transition: ${(p) => p.theme.transition.customTrans};

  ${SeeMoreButton}:hover & {
    stroke: ${(props) => props.theme.colors.primaryWhite};
  }
`;
