import { useState } from 'react';
import RecordDiaryModal from '../RecordDiaryModal/RecordDiaryModal';
import UpdateMealModal from '../UpdateMealModal/UpdateMealModal';

import edit from '../../../images/diaryPageImages/edit-2.svg';

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

const ElementOfFood = ({ item, index, img }) => {
  const [isRecordModalOpen, setIsRecordModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toggleModalRecord = () => {
    setIsRecordModalOpen(!isRecordModalOpen);
  };
  const toggleModalEdit = () => setIsEditModalOpen(!isEditModalOpen);

  const { carbohidrates, protein, fat, dish, mealType, showButton } = item;
  console.log(mealType);
  return (
    <>
      {showButton ? (
        <Wrapper>
          <SequenceNumber>{index + 1}</SequenceNumber>
          <AddFoodButton onClick={toggleModalRecord}>
            + Record your meal
          </AddFoodButton>
          {isRecordModalOpen && (
            <RecordDiaryModal
              onClose={toggleModalRecord}
              image={img}
              mealType={mealType}
            />
          )}
        </Wrapper>
      ) : (
        <Wrapper>
          <SequenceNumber>{index + 1}</SequenceNumber>
          <Dish>
            <Title>{dish}</Title>
            {dish && carbohidrates && (
              <EditButton type="button" onClick={toggleModalEdit}>
                <Img src={edit} alt="Edit" />
                Edit
              </EditButton>
            )}

            <BlockInfo>
              <Carbonohidrates>
                <span>Carb.</span>
                {carbohidrates}
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
          {isEditModalOpen && (
            <UpdateMealModal
              onClose={toggleModalEdit}
              mealType={mealType}
              item={item}
            />
          )}
        </Wrapper>
      )}
    </>
  );
};

export default ElementOfFood;
