import styled from 'styled-components';

export const BackButtonStyled = styled.button`
  color: #b6b6b6;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid transparent;
  background-color: transparent;
  transition: ${(p) => p.theme.transition.customTrans};
  border-radius: 12px;
  outline: none;
  &:hover {
    border-color: #e3ffa8;
  }
`;
