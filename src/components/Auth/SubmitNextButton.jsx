import styled from 'styled-components';
import { sharedButtonStyles } from '../Buttons/Buttons.styled';

const StyledButton = styled.button`
  ${sharedButtonStyles}
  width: 100%;
  background: ${(p) => p.theme.colors.primaryGreenLite};
  border: 1px solid ${(p) => p.theme.colors.primaryGreenLite};
  &:hover {
    background-color: transparent;
    border: 1px solid ${(p) => p.theme.colors.primaryGreenLite};
    color: ${(p) => p.theme.colors.primaryGray};
  }
`;

const SubmitNextButton = ({ btnName }) => {
  return <StyledButton>{btnName}</StyledButton>;
};

export default SubmitNextButton;
