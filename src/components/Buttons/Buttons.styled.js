import styled, { css } from 'styled-components';
import { theme } from '../../theme';

const sharedButtonStyles = css`
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
    textcolor,
    backgcolor,
    bordercolor,
    tabwidth,
    deskwidth,
    hoverbgcolor,
    hoverborder,
    hovertextcolor,
    hovertabwidth,
    hoverdeskwidth
  }) => css`
    width: ${width};
    color: ${textcolor};
    background-color: ${backgcolor};
    margin-right: 16px;
    cursor: pointer;
    padding: 8px 10px;
    border-radius: 12px;
    text-align: center;
    border: 1px solid ${bordercolor};

    @media (${theme.mq.tabMin}) {
      width: ${tabwidth};
    }

    @media (${theme.mq.deskMin}) {
      width: ${deskwidth};
    }

    &&:hover,
    &&:focus {
      background-color: ${hoverbgcolor};
      border: 1px solid ${hoverborder};
      color: ${hovertextcolor};
      animation: ${theme.transition.customTrans};
    }

    @media (${theme.mq.tabMin}) {
      &&:hover,
      &&:focus {
        width: ${hovertabwidth};
      }
    }

    @media (${theme.mq.deskMin}) {
      &&:hover,
      &&:focus {
        width: ${hoverdeskwidth};
      }
    }
  `}
`;

export default StyledButton;
