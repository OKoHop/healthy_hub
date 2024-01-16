import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledArrowReturn, StyledBackLink } from './BackLink.styled';

const BackLink = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');
  return (
    <StyledBackLink to={backLinkLocationRef.current}>
      <StyledArrowReturn />
    </StyledBackLink>
  );
};

export default BackLink;
