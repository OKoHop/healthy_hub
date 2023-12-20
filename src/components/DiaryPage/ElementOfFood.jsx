<<<<<<< Updated upstream:src/components/DiaryPage/ElementOfFood.jsx
import edit from '../../images/diaryPageImages/edit-2.svg'
=======
import { useState } from 'react';
import RecordDiaryModal from '../RecordDiaryModal/RecordDiaryModal';
import UpdateMealModal from '../UpdateMealModal/UpdateMealModal';
import edit from '../../../images/diaryPageImages/edit-2.svg';
>>>>>>> Stashed changes:src/components/Diary/Diary/ElementOfFood.jsx

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

<<<<<<< Updated upstream:src/components/DiaryPage/ElementOfFood.jsx

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
=======
const ElementOfFood = ({ item, index, img }) => {
  const [isRecordModalOpen, setIsRecordModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toggleModalRecord = () => setIsRecordModalOpen(!isRecordModalOpen);
  const toggleModalEdit = () => setIsEditModalOpen(!isEditModalOpen);

  const { carbohydrate, protein, fat, mealName, mealType, showButton } = item;

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
          {mealType && (
            <Dish>
              <Title>{mealName}</Title>
              <EditButton type="button" onClick={toggleModalEdit}>
                <Img src={edit} alt="Edit" />
                Edit
              </EditButton>
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
          {isEditModalOpen && (
            <UpdateMealModal
              onClose={toggleModalEdit}
              mealType={mealType}
              item={item}
            />
          )}
        </Wrapper>
      )}
>>>>>>> Stashed changes:src/components/Diary/Diary/ElementOfFood.jsx
    </>
  );
};

export default ElementOfFood;
