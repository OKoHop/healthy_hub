import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${(p) => css`
    background-color: ${p.theme.colors.primaryBlack2};
    display: flex;

    @media (${p.theme.mq.mobMin}) and (${p.theme.mq.mobMax}) {
      flex-direction: column;
      margin: 0 auto;
      padding: 24px 10px 40px 10px;
    }

    @media (${p.theme.mq.tabMin}) and (${p.theme.mq.tabMax}) {
      flex-direction: column;
      width: 834px;
      padding: 40px 195px 286px 195px;
    }

    @media (${p.theme.mq.deskMin}) {
      flex-direction: row;
      justify-content: center;
      width: 1440px;
      padding: 40px 150px 72px 150px;
    }
  `}
`;

export const Content = styled.div`
  ${(p) => css`
    @media (${p.theme.mq.mobMin}) and (${p.theme.mq.mobMax}) {
      width: 300px;
      margin: 0 auto 40px;
    }

    @media (${p.theme.mq.tabMin}) and (${p.theme.mq.tabMax}) {
      max-width: 444px;
      margin: 40px auto 286px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    @media (${p.theme.mq.deskMin}) {
      margin-top: 120px;
    }
  `}
`;

export const Title = styled.h1`
  ${(p) => css`
    margin-bottom: 16px;
    color: ${p.theme.colors.primaryWhite};
    ont-family: Poppins;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.25;

    @media (${p.theme.mq.mobMin}) and (${p.theme.mq.mobMax}) {
      font-size: 30px;
      line-height: 1.2;
    }

    @media (${p.theme.mq.tabMin}) and (${p.theme.mq.tabMax}) {
      text-align: center;
      align-self: center;
    }
    @media (${p.theme.mq.tabMin}) {
      font-size: 30px;
    }
  `}
`;

export const Subtitle = styled.h2`
  ${(p) => css`
    margin-bottom: 24px;
    color: ${p.theme.colors.primaryGray};
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.33;

    @media (${p.theme.mq.mobMin}) and (${p.theme.mq.mobMax}) {
      line-height: 1.33;
    }

    @media (${p.theme.mq.tabMin}) and (${p.theme.mq.tabMax}) {
      width: 410px;
      font-size: 22px;
      line-height: 1.45;
      text-align: center;
    }

    @media (${p.theme.mq.deskMin}) {
      width: 410px;
      font-size: 22px;
      line-height: 1.45;
      text-align: left;
    }
  `}
`;

export const SubmitBtnContainer = styled.div`
  ${(p) => css`
    display: flex;
    text-decoration: none;
    list-style: none;
    margin-bottom: 40px;
    @media (${p.theme.mq.mobMin}) and (${p.theme.mq.mobMax}) {
      margin-bottom: 40px;
    }

    @media (${p.theme.mq.tabMin}) and (${p.theme.mq.tabMax}) {
      width: 350px;
      margin: 0 auto 80px auto;
    }
    @media (${p.theme.mq.deskMin}) {
      margin-bottom: 80px;
    }
  `}
`;


export const AdvantagesList = styled.ul`
  margin-bottom: 16px;

  ${(p) => css`
    @media (${p.theme.mq.mobMin}) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    @media (${p.theme.mq.tabMin}) {
      width: 444px;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: baseline;
      justify-content: space-between;
    }

    @media (${p.theme.mq.deskMin}) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }
    @media ${p.theme.mq.mobMin} {
      width: 100%;
      text-align: left;

      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  `}
`;

export const Bullet = styled.span`
  margin-right: 8px;
`;

export const AdvantagesItem = styled.li`
  color: ${(p) => p.theme.colors.primaryWhite};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
`;
