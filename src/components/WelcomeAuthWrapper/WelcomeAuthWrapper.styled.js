import styled from 'styled-components';

export const WelcomeAuthWrapperContainer = styled.main`
  width: 100%;
  height: 100%;
  padding-block: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (${(p) => p.theme.mq.tabMin}) {
    width: 444px;
    margin: auto;
    gap: 60px;
    padding-block: 40px;
    align-items: center;
  }
  @media (${(p) => p.theme.mq.deskMin}) {
    flex-direction: row;
    width: 100%;
    gap: 104px;
    padding-left: 116px;
    text-align: start;
    align-items: flex-start;
  }
`;

export const Media = styled.div`
  width: 100%;
  @media (${(p) => p.theme.mq.tabMin}) {
    width: 380px;
  }
  @media (${(p) => p.theme.mq.deskMin}) {
    width: 592px;
  }
`;
