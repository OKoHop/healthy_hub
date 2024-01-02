import styled, { css } from 'styled-components';
import { ReactComponent as InformationIcon } from '../../../images/signupIcons/info.svg';
import { ReactComponent as CorrectIcon } from '../../../images/signupIcons/correct-icon.svg';
import { ReactComponent as IncorrectIcon } from '../../../images/signupIcons/incorrect-icon.svg';

export const FormInputBlock = styled.div`
  @media (${(p) => p.theme.mq.deskMin}) {
    max-width: 212px;
  }
`;

export const InputBlock = styled.div`
  position: relative;
`;

export const StyledFormInput = styled.input`
  width: 100%;
  color: ${(p) => p.theme.colors.primaryWhite};
  font-size: 14px;
  line-height: 20px;
  padding: 7px 30px 7px 10px;
  outline: none;
  border-radius: 12px;
  border: 1px solid ${(p) => p.theme.colors.primaryGreenLite};
  background: ${(p) => p.theme.colors.primaryBlack2};
  transition: ${(p) => p.theme.transition.customTrans};
  position: relative;
  cursor: pointer;
  ::placeholder {
    color: ${(p) => p.theme.colors.primaryGray};
  }
  ${(props) =>
    props.error &&
    css`
      border: 1px solid ${(p) => p.theme.colors.error};
    `}
  &[type="number"] {
    -moz-appearance: textfield;
  }
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ${(props) =>
    props.$showValidEffect &&
    !props.error &&
    props.value !== '' &&
    css`
      border: 1px solid ${(p) => p.theme.colors.correct};
    `}
  &:hover,
  &:focus {
    border: 1px solid ${(p) => p.theme.colors.primaryWhite};
  }
`;

export const ErrorText = styled.div`
  color: ${(p) => p.theme.colors.error};
  font-size: 12px;
  line-height: 14px;
  margin-left: 10px;
  margin-top: 4px;
  display: flex;
  gap: 5px;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;
`;

export const StyledInformationIcon = styled(InformationIcon)`
  width: 12px;
  height: 12px;
  fill: ${(p) => p.theme.colors.primaryWhite};
  cursor: pointer;
`;

export const StyledHideShowButton = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 10px;
  right: ${(props) => (props.$hasIcons ? '30px' : '10px')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${(props) =>
    props.error &&
    css`
      right: 30px;

      ${(props) =>
        props.$isVisible &&
        css`
          right: 10px;
        `}
    `}
`;
export const StyledHideShowButtonWithError = styled(StyledHideShowButton)`
  right: 30px;
`;
export const StyledHideShowButtonWithVisibility = styled(StyledHideShowButton)`
  right: 10px;
`;

const commonIconStyles = css`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${(props) => (props.$isVisible ? 'visible' : 'hidden')};
`;

export const StyledCorrectIcon = styled(CorrectIcon)`
  ${commonIconStyles}
`;
export const StyledIncorrectIcon = styled(IncorrectIcon)`
  ${commonIconStyles}
`;

export const CorrectMessage = styled.div`
  color: ${(p) => p.theme.colors.correct};
  font-size: 12px;
  margin-top: 4px;
  margin-left: 10px;
`;
