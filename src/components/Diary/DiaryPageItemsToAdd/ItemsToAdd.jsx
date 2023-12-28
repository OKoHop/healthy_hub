import {
  Info,
  Value,
  CarbonohidratesWrap,
  ProteinWrap,
  FatWrap,
} from './ItemsToAdd.styled';

const ItemToAdd = ({ carbonohidrates, protein, fat }) => {
  return (
    <Info>
      <CarbonohidratesWrap>
        Carbonohidrates: <Value>{carbonohidrates}</Value>
      </CarbonohidratesWrap>
      <ProteinWrap>
        Protein: <Value>{protein}</Value>
      </ProteinWrap>
      <FatWrap>
        Fat: <Value>{fat}</Value>
      </FatWrap>
    </Info>
  );
};

export default ItemToAdd;
