import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1402px) {
    flex-direction: row;
  }
`;
export const StyledDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 810px) {
    display: flex;
    gap: 20px;
    flex-direction: row;
    justify-content: flex-start;
  }

  @media (min-width: 1402px) {
    display: flex;
    gap: 20px;
    justify-content: flex-start;
  }
`;
export const SVG = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #b6b6b6;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 810px) {
    margin-bottom: 24px;
  }

  @media (min-width: 1402px) {
    margin-bottom: 16px;
  }
`;

export const H1 = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
`;

export const Link = styled.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;

  &:visited {
    color: #b6b6b6;
  }
`;

export const DivLink = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;
export const Section = styled.section`
  position: relative;
`;
