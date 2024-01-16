import { useNavigate } from 'react-router-dom';
import { StyledArrowReturn, StyledBackLink } from './BackLink.styled';

const BackLink = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <StyledBackLink onClick={goBack}>
      <StyledArrowReturn />
    </StyledBackLink>
  );
};

export default BackLink;
