import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

export const Item = styled.li`
  font-family:'Poppins', sans-serif;
  font-weight: 400;
  text-align: center;
  &:not(:last-child) {
    margin-right: 13px;
  }
`;

export const WeightTitle = styled.p`
  @media screen and (${p => p.theme.mq.mobMin}) {
    font-size: 14px;
    line-height: 1.43;
    margin-bottom: 16px;
  }
  @media screen and (${p => p.theme.mq.tabMin}) {
    font-size: 10px;
    line-height: 1.6;
    margin-bottom: 12px;
  }
  @media screen and (${p => p.theme.mq.deskMin}) {
    font-size: 14px;
    line-height: 1.43;
    margin-bottom: 16px;
  }
`;
export const DataTitle = styled.p`
  font-size: 10px;
  line-height: 1.4;
  color: ${p => p.theme.colors.primaryGray};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 6px;
`;

export const ChartsTitle = styled.h2`
  font-weight: 400;
  @media screen and (${p => p.theme.mq.mobMin}) {
    font-size: 18px;
    line-height: 1.44;
    margin-right: 58px;
  }
  @media screen and (${p => p.theme.mq.tabMin}) {
    font-size: 22px;
    line-height: 1.45;
    margin-right: 40px;
  }
`;

export const ChartsSubtitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  margin-right: 8px;
`;

export const ChartsCaption = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: ${p => p.theme.colors.PrimaryGray};
`;

export const Chart = styled.div`
  position: relative;
  background-color: ${p => p.theme.colors.primaryBlack2};
  border-radius: 1px solid;
  height: 382px;

  @media screen and (${p => p.theme.mq.mobMin}) {
    width: 676px;
    padding: 25px 20px 24px 14px;
  }
  @media screen and (${p => p.theme.mq.tabMin}) {
    width: 780px;
    padding: 25px 31px 24px 14px;

    & canvas {
      min-width: 750px;
      min-height: auto;
      margin: 0 auto;
    }
  }
  @media screen and (${p => p.theme.mq.deskMin}) {
    width: 676px;
    padding: 25px 20px 24px 14px;
    & canvas {
      min-width: 640px;
      min-height: auto;
    }
  }
`;

export const ChartLabelBlock = styled.div`
  width: 90px;
  height: 76px;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  padding: 8px 6px;
  border-radius: 8px;
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
`;

export const ChartLabelContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  & > p {
    font-size:30px;
    font-weight: 500;
    line-height: 1.19;
  }

  & > span {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.43;
    color: ${p => p.theme.colors.primaryGray};
  }
`;

export const Scale = styled.div`
  background-color: ${p => p.theme.colors.primaryBlack2};
  border-radius: 12px;
  height: 110px;

  @media screen and (${p => p.theme.mq.mobMin}) {
    width: 1372px;
    padding: 24px 24px 36px;
  }
  @media screen and (${p => p.theme.mq.tabMin}) {
    width: 780px;
    padding: 24px 20px 44px;
  }
  @media screen and (${p => p.theme.mq.deskMin}) {
    width: 1372px;
    padding: 24px 24px 36px;
  }
`;
