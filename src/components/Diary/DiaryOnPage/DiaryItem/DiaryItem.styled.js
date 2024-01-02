import styled from 'styled-components';

export const CardWrap = styled.li`
  @media screen and (${(p) => p.theme.mq.tabMin}) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`;

export const TitleWrap = styled.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: ${(props) => props.theme.colors.primaryWhite};

  @media screen and (${(p) => p.theme.mq.tabMin}) {
    margin-bottom: 0px;
  }
`;

export const Title = styled.h3`
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 24px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  color: ${(props) => props.theme.colors.primaryWhite};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 20px;

  @media screen and (${(p) => p.theme.mq.tabMin}) {
    flex-direction: row;
    column-gap: 20px;
  }
`;

export const CarbonohidratesWrap = styled.p`
  min-width: 190px;
`;

export const ProteinWrap = styled.p`
  width: 110px;
`;

export const FatWrap = styled.p`
  width: 60px;
`;

export const Value = styled.span`
  color: ${(props) => props.theme.colors.primaryGray};
  font-weight: ${(p) => p.theme.fontWeights.medium};
`;

export const DiaryImage = styled.img`
  width: 36px;
  height: 36px;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: ${(props) => props.theme.colors.primaryGreenLite};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
  transition: ${(p) => p.theme.transition.customTrans};
  &:hover {
    text-decoration: underline;
  }
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;
  stroke: #e3ffa8;
  cursor: pointer;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  :focus {
    transform: scale(1.2);
  }
`;
