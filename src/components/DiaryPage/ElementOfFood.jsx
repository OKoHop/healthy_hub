import edit from '../../images/diaryPageImages/edit-2.svg'

import {
  Wrapper,
  SequenceNumber,
  AddFoodButton,
  Dish,
  Title,
  EditButton,
  Img,
  BlockInfo,
  Carbonohidrates,
  Protein,
  Fat,
} from './ElementOfFood.styled';


const ElementOfFood = ({ item, index }) => {
  const { carbohydrate, protein, fat, mealName, mealType, showButton } = item;  

  return (
    <>
      {showButton
        ? (
          <Wrapper>
            <SequenceNumber>
              {index + 1}
            </SequenceNumber>
            <AddFoodButton onClick>
              + Record your meal
            </AddFoodButton>

          </Wrapper>
        ) : (
          <Wrapper>
            <SequenceNumber>
              {index + 1}
            </SequenceNumber>
            {mealType && (
              <Dish>                
                <Title>{mealName}</Title>
                <EditButton type="button" onClick><Img src={edit} alt="Edit" />Edit</EditButton>                
                <BlockInfo>
                  <Carbonohidrates>
                    <span>Carb.</span>
                    {carbohydrate}
                  </Carbonohidrates>
                  <Protein>
                    <span>Prot.</span>
                    {protein}
                  </Protein>
                  <Fat>
                    <span>Fat.</span>
                    {fat}
                  </Fat>
                </BlockInfo>                
              </Dish>
            )}
          </Wrapper>
        )}
    </>
  );
};

export default ElementOfFood;