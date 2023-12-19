import styled, { css } from 'styled-components';
import { theme } from '../../theme';

const Image = styled.img`
  ${({ mobwidth, mobmargin, tabwidth, tabmargin, deskwidth, deskmargin }) => css`
    
    @media (${theme.mq.mobMin}) and (${theme.mq.mobMax}) {
      width: ${mobwidth};
      margin: ${mobmargin};
    }

    @media (${theme.mq.tabMin}) and (${theme.mq.tabMax}) {
      width: ${tabwidth};
      margin: ${tabmargin};
    }

    @media (${theme.mq.deskMin}) {
      width: ${deskwidth};
      margin: ${deskmargin};
    }
  `}
`;

export default Image;
