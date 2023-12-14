import styled from 'styled-components';

export const StyledDiv = styled.div`
  border-radius: 12px;
  background-color: #0f0f0f;
  display: flex;
  flex-direction: column;

  @media (max-width: 810px) {
    width: 300px;
    height: 212px;
    padding: 16px 12px;
    gap: 20px;
  }

  @media (min-width: 810px) {
    width: 380px;
    height: 240px;
    padding: 24px 40px;
    gap: 32px;
  }

  @media (min-width: 1402px) {
    width: 328px;
    height: 240px;
    padding: 24px 40px;
    gap: 32px;
  }
`;

export const StyledH3 = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #b6b6b6;
`;

export const StyledP = styled.p`
  font-weight: 600;
  font-size: 34px;
  line-height: 1.12;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StyledDiv2 = styled.div`
  display: flex;
  gap: 20px;
`;
export const StyledSpan = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #b6b6b6;
`;

export const StyledSubtitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 6px;
`;

export const Thumb = styled.div`
  @media (max-width: 810px) {
    width: 300px;
  }

  @media (min-width: 810px) {
    width: 380px;
  }

  @media (min-width: 1402px) {
    width: 328px;
  }
`;
