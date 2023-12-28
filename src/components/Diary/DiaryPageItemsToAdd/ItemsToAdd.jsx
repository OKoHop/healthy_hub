import {
    Info,
    Value, 
    CarbonohidratesWrap,
    ProteinWrap,
    FatWrap,
  } from './ItemsToAdd.styled';
  
  const ItemToAdd = ({ info }) => {
  
    const { carbohidrates, protein, fat } = info;
  
    return (      
      <Info>
        <CarbonohidratesWrap>
          Carbonohidrates: <Value>{carbohidrates}</Value>
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
  