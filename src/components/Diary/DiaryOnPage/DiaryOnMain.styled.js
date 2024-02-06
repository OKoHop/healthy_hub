import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.primaryWhite};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 24px;

  @media screen and (${(p) => p.theme.mq.tabMin}) {
    font-size: ${(p) => p.theme.fontSizes.l};
    line-height: 32px;
  }
`;

export const DiaryLink = styled(Link)`
  color: ${(props) => props.theme.colors.primaryGray};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 20px;
  transition: ${(p) => p.theme.transition.customTrans};
  &:hover {
    color: ${(props) => props.theme.colors.primaryWhite};
  }
  @media screen and (${(p) => p.theme.mq.tabMin}) {
    font-size: ${(p) => p.theme.fontSizes.s};
    line-height: 22px;
  }
`;

export const CardsWrap = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`;
