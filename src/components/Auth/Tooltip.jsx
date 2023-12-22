import { useState } from 'react';
import styled from 'styled-components';

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;
const TooltipBlock = styled.div`
  position: absolute;
  top: calc(-100% + 14px);
  transform: translateX(14%);
  background-color: ${(p) => p.theme.colors.primaryWhite};
  font-size: 10px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.primaryBlack};
  padding: 3px;
  border-radius: 4px;
  z-index: 1;
  min-width: 160px;
`;

const Tooltip = ({ text, children }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <TooltipContainer
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      {children}
      {isTooltipVisible && <TooltipBlock> {text}</TooltipBlock>}
    </TooltipContainer>
  );
};

export default Tooltip;
