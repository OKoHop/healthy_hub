import RecordDiaryModal from '../../components/Diary/RecordDiaryModal/RecordDiaryModal';
import { AddMealButton } from './DiaryPage.styled';
import styled from 'styled-components';

const MealBtnBlock = styled.div`
  display: flex;
  gap: 16px;
  span {
    min-width: 16px;
    font-weight: 600;
    text-align: center;
  }
`;

const MealButtonBlock = ({
  mealType,
  foodIntake,
  toggleModalRecord,
  image,
  isRecordModalOpen,
}) => {
  return (
    <MealBtnBlock>
      <span>
        {mealType === 'Breakfast' ? foodIntake.length : foodIntake.length + 1}
      </span>
      <AddMealButton onClick={() => toggleModalRecord(mealType)}>
        + Record your meal
      </AddMealButton>
      {isRecordModalOpen && (
        <RecordDiaryModal
          onClose={() => toggleModalRecord(mealType)}
          mealType={mealType}
          image={image}
        />
      )}
    </MealBtnBlock>
  );
};

export default MealButtonBlock;
