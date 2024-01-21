import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${(p) => p.theme.colors.primaryGreenLite};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spinAnimation} 1s linear infinite;
`;

const LoaderWithBackdrop = () => (
  <Backdrop>
    <Loader />
  </Backdrop>
);

export default LoaderWithBackdrop;
