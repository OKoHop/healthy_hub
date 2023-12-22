import styled from 'styled-components';

export const BackButtonStyled = styled.button`
  color: ${(p) => p.theme.colors.primaryGray};
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 10px;
  border: 1px solid transparent;
  background-color: transparent;
  transition: ${(p) => p.theme.transition.customTrans};
  border-radius: 12px;
  &:hover {
    border-color: ${(p) => p.theme.colors.primaryGreenLite};
  }
`;
