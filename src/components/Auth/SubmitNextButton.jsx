import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  background: #e3ffa8;
  text-align: center;
  border: none;
  transition: ${(p) => p.theme.transition.customTrans};
  &:hover {
    box-shadow: 0 0 10px rgba(227, 255, 168, 0.8);
  }
`;

const SubmitNextButton = ({ btnName }) => {
  return <StyledButton>{btnName}</StyledButton>;
};

export default SubmitNextButton;
