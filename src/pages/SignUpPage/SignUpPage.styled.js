import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SignUpPageContainer = styled.main`
  width: 100%;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 444px;
  @media (${(p) => p.theme.mq.tabMin}) {
    align-items: center;
  }
  @media (${(p) => p.theme.mq.deskMin}) {
    padding-top: 80px;
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  color: ${(p) => p.theme.colors.primaryWhite};
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 16px;

  @media (${(p) => p.theme.mq.tabMin}) {
    font-size: 30px;
    line-height: 36px;
    text-align: center;
  }
  @media (${(p) => p.theme.mq.deskMin}) {
    text-align: start;
  }
`;

export const Subtitle = styled.p`
  color: ${(p) => p.theme.colors.primaryGray};
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 24px;
  @media (${(p) => p.theme.mq.tabMin}) {
    text-align: center;
    font-size: 22px;
    line-height: 32px;
  }
  @media (${(p) => p.theme.mq.deskMin}) {
    text-align: start;
  }
`;

export const FormBlock = styled.div`
  margin-bottom: ${(props) => (props.$isSigninVisible ? '48px' : '0')};
  @media (${(p) => p.theme.mq.tabMin}) {
    margin-bottom: ${(props) => (props.$isSigninVisible ? '206px' : '0')};
    width: 380px;
  }
  @media (${(p) => p.theme.mq.deskMin}) {
    max-width: 444px;
    margin-bottom: ${(props) => (props.$isSigninVisible ? '168px' : '0')};
  }
`;

export const AuthQuestion = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  @media (${(p) => p.theme.mq.tabMin}) {
    gap: 16px;
  }

  p {
    color: ${(p) => p.theme.colors.primaryGray};
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 16px;
    @media (${(p) => p.theme.mq.tabMin}) {
      margin-bottom: 0;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: ${(p) =>
    p.type === 'error' ? p.theme.colors.error : p.theme.colors.primaryWhite};
  max-width: 800px;
  font-size: ${(p) => (p.type === 'error' ? '16px' : '14px')};
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  text-decoration: ${(p) => (p.type === 'error' ? 'underline' : 'none')};
  transition: ${(p) => p.theme.transition.customTrans};
  &:hover {
    text-decoration: underline;
  }
  @media (${(p) => p.theme.mq.tabMin}) {
    font-size: ${(p) => (p.type === 'error' ? '20px' : '14px')};
  }
`;

export const ErrorBlock = styled.div`
  color: ${(p) => p.theme.colors.error};
  max-width: 800px;
  border: 1px solid ${(p) => p.theme.colors.error};
  font-size: 16px;
  padding: 5px;
  background-color: ${(p) => p.theme.colors.primaryWhite};
  border-radius: 14px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-inline: auto;
  @media (${(p) => p.theme.mq.tabMin}) {
    font-size: 20px;
    padding: 10px;
  }
`;
export const SuccessBlock = styled.div`
  color: ${(p) => p.theme.colors.correct};
  max-width: 800px;
  /* border: 1px solid ${(p) => p.theme.colors.primaryWhite}; */
  font-size: 16px;
  padding: 5px;
  /* background-color: ${(p) => p.theme.colors.primaryWhite}; */
  border-radius: 14px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-inline: auto;
  @media (${(p) => p.theme.mq.tabMin}) {
    font-size: 20px;
    padding: 10px;
  }
`;
