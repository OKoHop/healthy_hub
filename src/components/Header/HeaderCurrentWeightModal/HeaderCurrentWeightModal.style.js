import styled from 'styled-components';

export const BtnClose = styled.button`
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  position: absolute;
  top: 20px;
  right: 32px;
  color: ${(p) => p.theme.colors.primaryWhite};
  
  &:hover,
  :focus {
    stroke: ${(p) => p.theme.colors.primaryGreenLite};
  }
`;

export const SvgClose = styled.svg`
  fill: currentColor;
  width: 16px;
  height: 16px;
`;

export const TitleCurrentWeight = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`;

export const TextCurrentWeight = styled.p`
  margin-top: 8px;
  color: ${(p) => p.theme.colors.primaryGray};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const DateTextContainer = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 6px;
`;

export const DateToday = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

export const DateText = styled.p`
  color: ${(p) => p.theme.colors.primaryGray};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const FormWeight = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (${(p) => p.theme.mq.tabMin}) {
    margin-top: 16px;
    flex-direction: row;
  }
`;

export const FormWeightInput = styled.input`
  width: 100%;
  height: 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid ${(p) => p.theme.colors.primaryGreenLite};
  background: ${(p) => p.theme.colors.primaryBlack2};
  color: ${(p) => p.theme.colors.primaryWhite};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media (${(p) => p.theme.mq.tabMin}) {
    width: 166px;
  }
`;

export const FormWeightBtn = styled.button`
  width: 100%;
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: none;
  background: ${(p) => p.theme.colors.primaryGreenLite};
  color: ${(p) => p.theme.colors.primaryBlack2};
  font-weight: 500;
  line-height: 20px;

  @media (${(p) => p.theme.mq.tabMin}) {
    width: 166px;
  }

  &:hover,
  :focus {
    background: transparent;
    border: 1px solid ${(p) => p.theme.colors.primaryGreenLite};
    color: ${(p) => p.theme.colors.primaryWhite};
  }
`;

export const BtnCancel = styled.button`
  margin: 24px auto 0;
  width: 192px;
  height: 20px;
  border: none;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.colors.primaryGray};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;
