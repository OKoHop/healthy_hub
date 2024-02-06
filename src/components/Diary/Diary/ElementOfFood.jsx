import { useState } from 'react';
import RecordDiaryModal from '../RecordDiaryModal/RecordDiaryModal';
import UpdateMealModal from '../UpdateMealModal/UpdateMealModal';

import img1 from '../../../images/diaryPageImages/trash.png';
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
  RemoveBtn,
  BtnsBlock,
} from './ElementOfFood.styled';
import { useDispatch } from 'react-redux';
import { deleteFood } from '../../../redux/foods/foodsOperations';
import { getStats } from '../../../redux/statistics/statisticOperations';
import today from '../../../helpers/todayData';

const ElementOfFood = ({ item, index, img, mealType }) => {
  const dispatch = useDispatch();
  const [isRecordModalOpen, setIsRecordModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { carbohidrates, protein, fat, dish, showButton } = item;
  const toggleModalRecord = () => {
    setIsRecordModalOpen(!isRecordModalOpen);
  };

  const toggleModalEdit = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleRemoveClick = async () => {
    console.log(item._id, mealType);
    if (item && item._id) {
      await dispatch(
        deleteFood({ foodId: item._id, foodIntakeName: mealType })
      );
      await dispatch(getStats(today));
    }
  };

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
            {dish && (
              <BtnsBlock>
                <EditButton type="button" onClick={toggleModalEdit}>
                  <Img src={edit} alt="Edit" />
                  Edit
                </EditButton>
                <RemoveBtn type="button" onClick={handleRemoveClick}>
                  <img src={img1} alt="Trash" />
                </RemoveBtn>
              </BtnsBlock>
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
              item={item}
              mealType={mealType}
            />
          )}
        </Wrapper>
      )}
    </>
  );
};

export default ElementOfFood;
