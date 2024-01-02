import styled from 'styled-components';

export const ProductCard = styled.li`
  flex-basis: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
  padding: 20px 24px;
  border-radius: 12px;
  background-color: ${p => p.theme.colors.primaryBlack2};

  @media screen and (min-width: 834px) {
    flex-basis: calc((100% - 20px) / 2);
  }

    @media screen and (min-width: 1440px) {
      flex-basis: calc((676px - 20px) / 2);
  }
`;

export const ImgThumb = styled.div`
  width: 46px;
  height: 46px;
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 2px;
`;

export const ProductName = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
`;

export const Value = styled.p`
  margin-right: 6px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;

  & > span {
    font-weight: 500;
    color: ${p => p.theme.colors.primaryGray};
  }
`;
