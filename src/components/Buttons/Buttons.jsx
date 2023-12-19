import { NavLink } from 'react-router-dom';
import StyledButton from './Buttons.styled';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

function StyledButtons({
  text,
  to,
  onClick,
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
  type
}) {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <StyledButton
        as={NavLink}
        to={to}
        text={text}
        onClick={onClick}
        type={type}
        width={width}
        textColor={textColor}
        backGrColor={backGrColor}
        borderColor={borderColor}
        widthTab={widthTab}
        widthDesk={widthDesk}
        backGrColorHov={backGrColorHov}
        textColorHov={textColorHov}
        borderColorHov={borderColorHov}
        widthTabHov={widthTabHov}
        widthDeskHov={widthDeskHov}
        
      >
      {text}
      </StyledButton>
    </StyleSheetManager>
  );
}

export default StyledButtons;
