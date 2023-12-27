// import PropTypes from 'prop-types';
import { useState } from 'react';

import {
  AddButton,
  InfoWrap,
  Title,
  Value,
  CardWrap,
  CarbonohidratesWrap,
  ProteinWrap,
  FatWrap,
  DiaryImage,
  TitleWrap,
  Svg,
} from './DiaryItem.styled.js';
// import { fetchFoodStatistics } from '../../../redux/Today/Diary/operations';
import svgSlice from '../../../../images/Illustrations/Today/today-svg-sprite.svg';
import RecordDiaryModal from '../../RecordDiaryModal/RecordDiaryModal.jsx';

const DiaryItem = ({ title, image, carbonohidrates, protein, fat }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  //   function handleDelete() {
  //   dispatch(delFoodIntake());
  //   setTimeout(() => {
  //     dispatch(fetchFoodStatistics());
  //   }, 100);
  //   toast.success('FoodIntake has been successfuly reset');
  // }

  // const { carbonohidrates, protein, fat } = info;

  return (
    <CardWrap>
      <TitleWrap>
        <DiaryImage src={image} alt="Plate" />
        <Title>{title}</Title>
      </TitleWrap>
      {carbonohidrates !== 0 || protein !== 0 || fat !== 0 ? (
        <InfoWrap>
          <CarbonohidratesWrap>
            Carbonohidrates: <Value>{carbonohidrates}</Value>
          </CarbonohidratesWrap>
          <ProteinWrap>
            Protein: <Value>{protein}</Value>
          </ProteinWrap>
          <FatWrap>
            Fat: <Value>{fat}</Value>
          </FatWrap>
          <Svg onClick={toggleModal}>
            <use href={`${svgSlice}#trash`}></use>
          </Svg>
        </InfoWrap>
      ) : (
        <AddButton onClick={toggleModal}>+ Record your meal</AddButton>
      )}

      {isModalOpen && (
        <RecordDiaryModal
          onClose={toggleModal}
          image={image}
          mealType={title}
        />
      )}
    </CardWrap>
  );
};

// DiaryItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,

//   carbonohidrates: PropTypes.number.isRequired,
//   protein: PropTypes.number.isRequired,
//   fat: PropTypes.number.isRequired,
// };

export default DiaryItem;
