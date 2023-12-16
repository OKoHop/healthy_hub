import styled from 'styled-components';

export const Image = styled.img`
  width: 300px;
  height: 296px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 380px;
    height: 376px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-bottom: 0;
  }
`;