import styled from 'styled-components';

export const StyledDiv = styled.div`
  border-radius: 12px;
  background-color: #0f0f0f;
  display: flex;

  @media (max-width: 834px) {
    width: 300px;
    height: 224px;
    padding: 16px 12px;
    gap: 20px;
  }

  @media (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 22px;
    gap: 40px;
  }

  @media (min-width: 1440px) {
    width: 444px;
    height: 240px;
    padding: 24px 40px;
  }
`;

export const StyledDiv2 = styled.div`
  @media (min-width: 834px) {
    display: flex;
    gap: 40px;
    align-items: center;
    margin-bottom: 16px;
  }
`;

export const StyledP = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  margin-top: 22px;
  margin-bottom: 12px;

  @media (max-width: 834px) {
    margin-top: 22px;
    margin-bottom: 12px;
  }

  @media (min-width: 834px) {
    margin-top: 33px;
    margin-bottom: 12px;
  }

  @media (min-width: 1440px) {
    margin-top: 33px;
    margin-bottom: 12px;
  }
`;
export const StyledNum = styled.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 1.21;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;

  @media (min-width: 810px) {
    margin-bottom: 0px;
  }
`;

export const StyledSpan = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`;

export const StyledSpan2 = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`;

export const StyledLeft = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  display: flex;
  gap: 4px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    margin-bottom: 0px;
  }
`;
export const StyledBtn = styled.button`
  width: 166px;
  height: 36px;
  border: inherit;
  border-radius: 12px;
  padding: 8px 10px;
  background-color: #e3ffa8;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: #0f0f0f;
`;

export const StyledDiagram = styled.div`
  width: 80px;
  height: 192px;
  border-radius: 20px;
  background-color: #292928;
`;
export const Thumb = styled.div`
  @media (max-width: 834px) {
    width: 300px;
  }

  @media (min-width: 834px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    width: 444px;
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SVG = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #0f0f0f;
`;
