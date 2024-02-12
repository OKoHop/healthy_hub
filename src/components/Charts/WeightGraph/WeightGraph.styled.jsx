import styled from 'styled-components';

export const WeightBlock = styled.div`
  width: 100%;
`;
export const WeightTitleBlock = styled.div`
  color: ${(p) => p.theme.colors.primaryWhite};
  display: flex;
  align-items: flex-end;
  gap: 40px;
  margin-bottom: 8px;
  @media (${(p) => p.theme.mq.tabMin}) {
  }
  @media (${(p) => p.theme.mq.deskMin}) {
    margin-bottom: 12px;
  }
  h2 {
    font-size: 22px;
    font-weight: 400;
    line-height: 32px;
    margin-right: 40px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-right: 8px;
  }
`;
export const WeightGraphBlock = styled.div`
  width: 100%;
  overflow: auto;
  border-radius: 12px;
  padding: 28px 20px;
  background-color: ${(p) => p.theme.colors.primaryBlack2};
  color: ${(p) => p.theme.colors.primaryWhite};
  ul {
    display: flex;
    justify-content: space-between;
    gap: 25px;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }
  }
`;
