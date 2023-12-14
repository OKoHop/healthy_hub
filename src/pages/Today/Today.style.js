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
