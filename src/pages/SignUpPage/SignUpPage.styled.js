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

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  @media (${(p) => p.theme.mq.tabMin}) {
    align-items: center;
  }
  @media (${(p) => p.theme.mq.deskMin}) {
    padding-top: 80px;
    align-items: flex-start;
  }
`;
export const Title = styled.h2`
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 16px;
  text-align: center;
  @media (${(p) => p.theme.mq.tabMin}) {
    font-size: 30px;
    line-height: 36px;
  }
`;

export const Subtitle = styled.p`
  color: #b6b6b6;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 24px;
  text-align: center;
  @media (${(p) => p.theme.mq.tabMin}) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const FormBlock = styled.div.attrs((props) => ({
  issigninvisible: props.issigninvisible ? 'true' : undefined,
}))`
  margin-bottom: ${(props) => (props.issigninvisible ? '48px' : '0')};
  @media (${(p) => p.theme.mq.tabMin}) {
    margin-bottom: ${(props) => (props.issigninvisible ? '206px' : '0')};
    width: 380px;
  }
  @media (${(p) => p.theme.mq.deskMin}) {
    max-width: 444px;
    margin-bottom: ${(props) => (props.issigninvisible ? '168px' : '0')};
  }
`;

export const SigInQuestion = styled.div`
  @media (${(p) => p.theme.mq.tabMin}) {
    display: flex;
    gap: 16px;
  }

  p {
    color: #b6b6b6;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 16px;
    @media (${(p) => p.theme.mq.tabMin}) {
      margin-bottom: 0;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  text-decoration: none;
  transition: ${(p) => p.theme.transition.customTrans};
  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorBlock = styled.div`
  border: 1px solid #e74a3b;
  font-size: 20px;
  padding: 10px;
  background-color: #e3ffa8;
  border-radius: 14px;
  margin-bottom: 30px;
`;
