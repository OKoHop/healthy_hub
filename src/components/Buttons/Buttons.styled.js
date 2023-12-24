import styled, { css } from 'styled-components';
import { theme } from '../../theme';

export const sharedButtonStyles = css`
  padding: 8px 10px;
  border-radius: 12px;
  text-decoration: none;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
  text-align: center;
  transition: ${theme.transition.customTrans};
`;

const StyledButton = styled.button`
  ${sharedButtonStyles}
  ${({
    width,
    textColor,
    backGrColor,
    borderColor,
    widthTab,
    widthDesk,
    backGrColorHov,
    borderColorHov,
    textColorHov,
    widthTabHov,
    widthDeskHov,
  }) => css`
    width: ${width};
    color: ${textColor};
    background-color: ${backGrColor};
    margin-right: 16px;
    cursor: pointer;
    padding: 8px 10px;
    border-radius: 12px;
    text-align: center;
    border: 1px solid ${borderColor};

    @media (${theme.mq.tabMin}) {
      width: ${widthTab};
    }

    @media (${theme.mq.deskMin}) {
      width: ${widthDesk};
    }

    &&:hover,
    &&:focus {
      background-color: ${backGrColorHov};
      border: 1px solid ${borderColorHov};
      color: ${textColorHov};
      animation: ${theme.transition.customTrans};
    }

    @media (${theme.mq.tabMin}) {
      &&:hover,
      &&:focus {
        width: ${widthTabHov};
      }
    }

    @media (${theme.mq.deskMin}) {
      &&:hover,
      &&:focus {
        width: ${widthDeskHov};
      }
    }
  `}
`;

export default StyledButton;
