import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../../images/arrow-left.svg';

export const StyledBackLink = styled(NavLink)`
  display: flex;
  @media screen and (${(p) => p.theme.mq.mobMin}) {
    margin-right: 8px;
  }
  @media screen and (${(p) => p.theme.mq.tabMin}) {
    margin-right: 12px;
  }
`;

export const StyledArrowReturn = styled(ArrowLeft)`
  stroke: ${(p) => p.theme.colors.primaryGray};
  transition: ${(p) => p.theme.transition.customTrans};
  &:hover {
    stroke: ${(p) => p.theme.colors.primaryWhite};
  }
  @media screen and (${(p) => p.theme.mq.mobMin}) {
    width: 16px;
  }
  @media screen and (${(p) => p.theme.mq.tabMin}) {
    width: 24px;
  }
`;
