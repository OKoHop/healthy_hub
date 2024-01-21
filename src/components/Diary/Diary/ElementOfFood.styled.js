import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  column-gap: 16px;
  color: ${(p) => p.theme.colors.primaryWhite};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 20px;
`;

export const SequenceNumber = styled.span`
  min-width: 16px;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  text-align: center;
`;

export const Dish = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  row-gap: 6px;
`;

export const Title = styled.p`
  text-transform: capitalize;
  flex-grow: 1;
`;
export const BtnsBlock = styled.div`
  display: flex;
  align-items: flex-start;
  transition: ${(p) => p.theme.transition.customTrans};
  img {
    width: 16px;
    height: 16px;
  }
  @media screen and (${(p) => p.theme.mq.tabMin}) {
    order: 1;
  }
`;
export const EditButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  display: flex;
  column-gap: 6px;
  color: ${(p) => p.theme.colors.primaryGray};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 20px;
  cursor: pointer;
  &:hover {
    color: ${(p) => p.theme.colors.primaryWhite};
  }
`;
export const RemoveBtn = styled.button`
  border: none;
  background-color: transparent;
  @media screen and (${(p) => p.theme.mq.tabMin}) {
    order: 1;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const Img = styled.img`
  width: 16px;
  height: 16px;
`;

export const BlockInfo = styled.div`
  display: flex;
  column-gap: 12px;
  font-size: 12px;
  line-height: 18px;

  @media screen and (${(p) => p.theme.mq.tabMin}) {
    font-size: ${(p) => p.theme.fontSizes.xs};
    line-height: 20px;
  }
`;

export const Carbonohidrates = styled.p`
  display: flex;
  width: 70px;
  column-gap: 6px;

  & > span {
    color: ${(props) => props.theme.colors.primaryGray};
  }

  @media screen and (${(p) => p.theme.mq.tabMin}) {
    width: 80px;

    & > span {
      display: none;
    }
  }
`;

export const Protein = styled(Carbonohidrates)`
  width: 62px;
  @media screen and (${(p) => p.theme.mq.tabMin}) {
    width: 80px;
  }
`;

export const Fat = styled(Carbonohidrates)`
  width: 58px;
  @media screen and (${(p) => p.theme.mq.tablet}) {
    width: 80px;
  }
`;

export const AddFoodButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: ${(props) => props.theme.colors.primaryGreenLite};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
  transition: ${(p) => p.theme.transition.customTrans};
  &:hover {
    text-decoration: underline;
  }
`;
