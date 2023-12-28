import styled from 'styled-components';

export const ScrollerWrapper = styled.div`
  @media screen and (max-width: 834px) {
    overflow: auto;

    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgb(255, 255, 255, 0.1);
      border-radius: 12px;
    }

    &::-webkit-scrollbar-track {
      background-color: rgb(15, 15, 15, 1);
    }
  }
`;

export const WeightSectionhWrapper = styled.div`
  margin-bottom: 30px;
  margin-top: 6px;
  max-width: 1372px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 834px) and (max-width: 1439px) {
    margin-top: 40px;
  }
  @media screen and (max-width: 834px) {
    margin-top: 20px;
  }
`;

export const WeightHeadingWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 6px;
  justify-content: space-between;
`;
export const WeightHeader = styled.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-right: 40px;
  @media screen and (max-width: 834px) {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
  }
`;

export const HeaderData = styled.div`
  display: flex;
`;

export const WeightAverageTitle = styled.p`
  color: var(--primary-title-text-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-right: 8px;
`;

export const WeightAverageNumber = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const Overflow = styled.div`
  background: var(--layout-color);
  padding: 24px 21px 36px;
  border-radius: 12px;

  @media screen and (min-width: 834px) and (max-width: 1439px) {
    padding-bottom: 44px;
  }

  @media screen and (max-width: 834px) {
    margin-bottom: 8px;
    padding: 0px;
    background-color: transparent;
  }
`;

export const WeightGraphWrapper = styled.div`
  border-radius: 12px;
  display: flex;
  gap: 6px;
  flex-shrink: 0;
  flex-direction: column;
  @media screen and (min-width: 834px) and (max-width: 1439px) {
  }
  @media screen and (max-width: 834px) {
    border-radius: 12px;

    min-width: 834px;
    width: 1372px;
    gap: 16px;
    padding: 24px 21px 36px;
    background: var(--layout-color);
  }
`;

export const WeightArrayList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

export const MonthArrayList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

export const WeightArrayItem = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--primary-title-text-color);
  @media screen and (min-width: 834px) and (max-width: 1439px) {
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
  @media screen and (max-width: 834px) {
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const MonthArrayItem = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  width: 14px;
  height: 14px;
`;
