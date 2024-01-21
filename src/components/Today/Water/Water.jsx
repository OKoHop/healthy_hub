import { useState } from 'react';
import { StyledSubtitle } from '../DailyGoal/DailyGoal.styled';
import {
  P,
  Progress,
  SVG,
  StyledBtn,
  StyledDiagram,
  StyledDiv,
  StyledDiv2,
  StyledLeft,
  StyledNum,
  StyledP,
  StyledSpan,
  StyledSpan2,
  Svg,
  Thumb,
} from './Water.styled';
import svgSlice from '../../../images/Illustrations/Today/today-svg-sprite.svg';
import WaterModal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { delWaterIntake } from '../../../redux/Today/Water/operations';
import { waterIntake } from '../../../redux/Today/Water/selectors';
import toast from 'react-hot-toast';
import { useAuth } from '../../../hooks/useAuth';
import LoaderWithBackdrop from '../../LoaderSpinner';

const Water = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const intakeWater = useSelector(waterIntake);
  const dailyWater = user.water;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function waterLeft(water, intake) {
    if (water - intake < 0) {
      return 0;
    }
    return Math.round(water - intake);
  }

  function waterPercentage(water, waterIntake) {
    if ((waterIntake / water) * 100 >= 100) {
      return 100;
    }
    return Math.round((waterIntake / water) * 100);
  }

  async function handleDelete() {
    try {
      setLoading(true);
      await dispatch(delWaterIntake());
      toast.success('Water consumption has been successfully reset');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Thumb>
        <StyledSubtitle>Water</StyledSubtitle>
        <StyledDiv>
          <StyledDiagram>
            <P>{waterPercentage(dailyWater, intakeWater)} %</P>
            <Progress
              height={waterPercentage(dailyWater, intakeWater) || 0}
            ></Progress>
          </StyledDiagram>
          <div>
            <Svg onClick={handleDelete}>
              <use href={`${svgSlice}#trash`}></use>
            </Svg>
            {loading && <LoaderWithBackdrop />}
            <StyledP>Water consumption</StyledP>
            <StyledDiv2>
              <StyledNum>
                {intakeWater} <StyledSpan>ml</StyledSpan>
              </StyledNum>
              <StyledLeft>
                left:{' '}
                <StyledSpan2>{waterLeft(dailyWater, intakeWater)}</StyledSpan2>{' '}
                <StyledSpan>ml</StyledSpan>
              </StyledLeft>
            </StyledDiv2>
            <StyledBtn onClick={openModal} disabled={loading}>
              <SVG>
                <use href={`${svgSlice}#add`}></use>
              </SVG>
              Add water intake
            </StyledBtn>
          </div>
        </StyledDiv>
      </Thumb>
      <WaterModal open={modalIsOpen} close={closeModal} />
    </>
  );
};

export default Water;
