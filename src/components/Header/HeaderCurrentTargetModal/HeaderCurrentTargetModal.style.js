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

export const TitleCurrentTarget = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`;

export const TextCurrentTarget = styled.p`
  margin-top: 8px;
  width: 284px;
  color: ${(p) => p.theme.colors.primaryGray};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
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

  &:hover,
  :focus {
    color: ${(p) => p.theme.colors.primaryGreenLite};
  }
`;
