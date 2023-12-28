import { useState } from 'react';

import UpdateMealModal from '../UpdateMealModal/UpdateMealModal';

import edit from '../../../images/diaryPageImages/edit-2.svg';

import {
  SequenceNumber,
  Dish,
  Title,
  EditButton,
  Img,
  BlockInfo,
  Carbonohidrates,
  Protein,
  Fat,
} from './ElementOfFood.styled';

const ElementOfFood = ({ item, index, mealType }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toggleModalEdit = () => setIsEditModalOpen(!isEditModalOpen);

  const { carbohidrates, protein, fat, dish } = item;

  if (!carbohidrates && !protein && !fat && !dish && !mealType) {
    return null;
  }

  return (
    <>
      <Dish>
        <SequenceNumber>{index + 1}</SequenceNumber>
        <Title>{dish}</Title>
        <EditButton type="button" onClick={toggleModalEdit}>
          <Img src={edit} alt="Edit" />
          Edit
        </EditButton>
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
    </>
  );
};

export default ElementOfFood;
