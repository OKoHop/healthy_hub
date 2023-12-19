import { NavLink } from 'react-router-dom';
import StyledButton from './Buttons.styled';

function StyledButtons({
  text,
  to,
  onClick,
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
  hoverdeskwidth,
  type
}) {
  const buttonStyles = {
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
  };
return (
    <StyledButton
      as={NavLink}
      to={to}
      onClick={onClick}
      type={type}
      {...buttonStyles}
    >
      {text}
    </StyledButton>
  );
}

export default StyledButtons;
