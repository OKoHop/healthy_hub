import styled from 'styled-components';
import { sharedButtonStyles } from '../Buttons/Buttons.styled';

export const BackButtonStyled = styled.button`
  ${sharedButtonStyles}
  color: ${(p) => p.theme.colors.primaryGray};
  border: 1px solid transparent;
  background-color: transparent;
  width: 100px;
  margin: auto;
  &:hover {
    border-color: ${(p) => p.theme.colors.primaryGreenLite};
    width: 100%;
  }
`;
