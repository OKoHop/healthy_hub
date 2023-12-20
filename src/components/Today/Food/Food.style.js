import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: #0f0f0f;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 833px) {
    width: 300px;
    height: 380px;
    padding: 16px 12px;
  }

  @media (min-width: 834px) {
    width: 780px;
    height: 240px;
    padding: 36px 40px;

    flex-direction: row;
    gap: 40px;
  }

  @media (min-width: 1440px) {
    width: 560px;
    height: 240px;
    padding: 36px 40px;

    flex-direction: row;
    gap: 40px;
  }
`;

export const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CaloriesDiv = styled.div`
  width: 168px;
  height: 168px;
`;
