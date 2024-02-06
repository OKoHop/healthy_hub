import styled from 'styled-components';

export const NutrientBlock = styled.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

export const NutrientInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const NutrientName = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`;

export const NutrientStatistics = styled.div`
  display: flex;
  gap: 12px;
  p{
    font-size: 14px;
  line-height: 1.43;
  }
  span{
    color: #b6b6b6;
  }
`;
