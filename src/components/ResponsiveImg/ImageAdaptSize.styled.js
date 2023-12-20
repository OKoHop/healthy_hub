import styled, { css } from 'styled-components';
import { theme } from '../../theme';

const Image = styled.img`
  ${({ 
    widthMob,
    marginMob,
    widthTab,
    marginTab,
    widthDesk,
    marginDesk }) => css`
    
    @media (${theme.mq.mobMin}) and (${theme.mq.mobMax}) {
      width: ${widthMob};
      margin: ${marginMob};

    }

    @media (${theme.mq.tabMin}) {
      width: ${widthTab};
      margin: ${marginTab};
      
    }

    @media (${theme.mq.deskMin}) {
      width: ${widthDesk};
      margin: ${marginDesk};
    }
  `}
`;

export default Image;
