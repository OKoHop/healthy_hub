import PropTypes from 'prop-types';
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
  Svg
} from './DiaryItem.styled.js';
import svgSlice from '../../../../images/Illustrations/Today/today-svg-sprite.svg';
import RecordDiaryModal from '../../RecordDiaryModal/RecordDiaryModal.jsx';
import { delFoodIntake } from '../../../../redux/statistics/statisticOperations.js';
import { useDispatch } from 'react-redux';

const DiaryItem = ({ title, image, info }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch()
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const foodIntakeName = title.toLowerCase();

  //   function handleDelete(foodIntakeName) {
  //   dispatch(delFoodIntake());
  //   setTimeout(() => {
  //     dispatch(getDailyStatistics());
  //   }, 100);
  //   // toast.success('WaterIntake has been successfuly reset');
  // }

  const { carbohidrates, protein, fat } = info;

  return (
    <CardWrap>
      <TitleWrap>
        <DiaryImage src={image} alt="Plate" />
        <Title>{title}</Title>
      </TitleWrap>
      {carbohidrates !== 0 || protein !== 0 || fat !== 0 ? (
        <InfoWrap>
          <CarbonohidratesWrap>
            Carbonohidrates: <Value>{carbohidrates}</Value>
          </CarbonohidratesWrap>
          <ProteinWrap>
            Protein: <Value>{protein}</Value>
          </ProteinWrap>
          <FatWrap>
            Fat: <Value>{fat}</Value>
          </FatWrap>
                    <Svg>
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

DiaryItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  info: PropTypes.shape({
    carbohidrates: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
  }),
};

export default DiaryItem;
