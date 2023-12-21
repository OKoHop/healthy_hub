import styled from 'styled-components';

export const Info = styled.div`
  display: flex;
  row-gap: 12px;
  column-gap: 20px;
  flex-wrap: wrap;

  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 20px;

  @media screen and (${p => p.theme.mq.tabMin}) {
    margin-right: 60px;
    flex-wrap: nowrap;
  }

  @media screen and (${p => p.theme.mq.deskMin}) {
    margin-right: 25px;
  }
`;

export const CarbonohidratesWrap = styled.p`
  width: 100%;

  @media screen and (${p => p.theme.mq.tabMin}) {
    width: 164px;
  }
`;

export const ProteinWrap = styled.p`
  width: 92px;
`;

export const FatWrap = styled.p`
  width: 66px;
`;

export const Value = styled.span`
  color: ${props => props.theme.colors.primaryGray};
  font-weight: ${p => p.theme.fontWeights.medium};
`;
