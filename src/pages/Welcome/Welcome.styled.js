import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  ${(p) => css`
    background-color: ${p.theme.colors.primaryBlack2};
    display: flex;

    @media (${p.theme.mq.mobile}) and (max-width: 833px) {
      flex-direction: column;
      margin: 0 auto;
      padding: 24px 10px 40px 10px;
    }

    @media (${p.theme.mq.tablet}) and (max-width: 1439px) {
      flex-direction: column;
      width: 834px;
      padding: 40px 195px 286px 195px;
    }

    @media (${p.theme.mq.desktop}) {
      flex-direction: row;
      justify-content: center;
      width: 1440px;
      padding: 40px 150px 72px 150px;
    }
  `}
`;

export const Image = styled.img`
  ${(p) => css`
    margin-right: auto;
    margin-left: auto;
    margin-top: 40px;

    @media (${p.theme.mq.mobile}) and (max-width: 833px) {
      width: 300px;
      margin-top: 24px;
      margin-bottom: 24px;
    }

    @media (${p.theme.mq.tablet}) and (max-width: 1439px) {
      width: 380px;
      margin-bottom: 80px;
    }

    @media (${p.theme.mq.desktop}) {
      width: 592px;
      margin: 40px 104px 72px 0;
    }
  `}
`;

export const Content = styled.div`
  ${(p) => css`
    @media (${p.theme.mq.mobile}) and (max-width: 833px) {
      width: 300px;
      margin: 0 auto 40px;
    }

    @media (${p.theme.mq.tablet}) and (max-width: 1439px) {
      max-width: 444px;
      margin: 40px auto 286px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    @media (${p.theme.mq.desktop}) {
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
    line-height: 30/24;

    @media (${p.theme.mq.mobile}) and (max-width: 833px) {
      font-size: 30px;
      line-height: 36/30;
    }

    @media (${p.theme.mq.tablet}) and (max-width: 1439px) {
      text-align: center;
      align-self: center;
    }
    @media (${p.theme.mq.tablet}) {
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
    line-height: 24/18;

    @media (${p.theme.mq.mobile}) and (max-width: 833px) {
      line-height: 24/18;
    }

    @media (${p.theme.mq.tablet}) and (max-width: 1439px) {
      width: 410px;
      font-size: 22px;
      line-height: 32/22;
      text-align: center;
    }

    @media (${p.theme.mq.desktop}) {
      width: 410px;
      font-size: 22px;
      line-height: 32/22;
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
    @media (${p.theme.mq.mobile}) and (max-width: 833px) {
      margin-bottom: 40px;
    }

    @media (${p.theme.mq.tablet}) and (max-width: 1439px) {
      width: 350px;
      margin: 0 auto 80px auto;
    }
    @media (${p.theme.mq.desktop}) {
      margin-bottom: 80px;
    }
  `}
`;

const sharedButtonStyles = css`
  display: block;
  padding: 8px 10px;
  border-radius: 12px;
  text-decoration: none;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20/14;
  text-align: center;
  transition: ${(p) => p.theme.transition.customTrans};
`;

export const SignInBtn = styled(NavLink)`
  ${sharedButtonStyles}
  ${(p) => css`
    width: 142px;
    border: 1px solid transparent;
    background-color: ${p.theme.colors.primaryGreenLite};
    color: ${p.theme.colors.primaryBlack2};
    margin-right: 16px;

    &&:hover,
    &&:focus {
      cursor: pointer;
      color: ${p.theme.colors.primaryWhite};
      background-color: ${p.theme.colors.primaryBlack2};
      border: 1px solid ${p.theme.colors.primaryGreenLite};
      animation: ${p.theme.transition.customTrans};
    }

    @media (${p.theme.mq.mobile}) and (max-width: 833px) {
      &&:hover,
      &&:focus {
        width: 142px;
      }
    }

    @media (${p.theme.mq.tablet}) {
      width: 212px;
    }
  `}
`;

export const SignUpBtn = styled(NavLink)`
  ${sharedButtonStyles}
  ${(p) => css`
    width: 122px;
    border: none;
    background-color: ${p.theme.colors.primaryBlack2};
    color: ${p.theme.colors.primaryWhite};

    &&:hover,
    &&:focus {
      cursor: pointer;
      border: 1px solid ${p.theme.colors.primaryGreenLite};
      color: ${p.theme.colors.primaryWhite};
      animation: ${p.theme.transition.customTrans};
    }

    @media (${p.theme.mq.mobile}) and (max-width: 833px) {
      &&:hover,
      &&:focus {
        width: 132px; 
        margin-left: -10px; 
      }
    } 

    @media (${p.theme.mq.tablet}) {
      &&:hover,
      &&:focus {
        width: 212px;
      }
    }
  `}
`;


export const AdvantagesList = styled.ul`
  margin-bottom: 16px;

  ${(p) => css`
    @media (${p.theme.mq.mobile}) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    @media (${p.theme.mq.tablet}) {
      width: 444px;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: baseline;
      justify-content: space-between;
    }

    @media (${p.theme.mq.desktop}) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }
    @media ${p.theme.mq.mobile} {
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
  line-height: 20/14;
`;
