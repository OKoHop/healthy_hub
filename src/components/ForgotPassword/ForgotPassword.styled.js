import styled from 'styled-components';

export const FormBlock = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-bottom: 54px;
  @media (${(p) => p.theme.mq.tabMin}) {
    width: 380px;
    margin: 0 0 286px;
  }
  @media (${(p) => p.theme.mq.deskMin}) {
    width: 212px;
    margin: 0 0 248px;
  }
`;
