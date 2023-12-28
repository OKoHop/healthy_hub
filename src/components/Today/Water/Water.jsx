import { useState } from 'react';
import { StyledSubtitle } from '../DailyGoal/DailyGoal.style';
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
} from './Water.style';
import svgSlice from '../../../images/Illustrations/Today/today-svg-sprite.svg';
import WaterModal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { water } from '../../../redux/Today/Daily/selectors';
import { delWaterIntake } from '../../../redux/Today/Water/operations';
import { waterIntake } from '../../../redux/Today/Water/selectors';
import toast from 'react-hot-toast';
import { dailyWater } from '../../../redux/Today/Food/selectors';
import { getDailyStatistics } from '../../../redux/Today/Food/operations';

const Water = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const wat = useSelector(water) || 0;
  const watIntake = useSelector(waterIntake);
  const dispatch = useDispatch();
  const getWater = useSelector(dailyWater) || 0;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function waterLeft(wat, watIntake) {
    if (wat - getWater < 0) {
      return 0;
    }
    return Math.round(wat - getWater);
  }

  function persentWater(wat, waterIntake) {
    if ((waterIntake / wat) * 100 >= 100) {
      return 100;
    }
    return Math.round((waterIntake / wat) * 100);
  }

  function handleDelete() {
    dispatch(delWaterIntake());
    setTimeout(() => {
      dispatch(getDailyStatistics());
    }, 100);
    toast.success('WaterIntake has been successfuly reset');
  }

  return (
    <>
      <Thumb>
        <StyledSubtitle>Water</StyledSubtitle>
        <StyledDiv>
          <StyledDiagram>
            <P>{persentWater(wat, getWater)} %</P>
            <Progress height={persentWater(wat, getWater) || 0}></Progress>
          </StyledDiagram>
          <div>
            <Svg onClick={handleDelete}>
              <use href={`${svgSlice}#trash`}></use>
            </Svg>
            <StyledP>Water consumption</StyledP>
            <StyledDiv2>
              <StyledNum>
                {getWater} <StyledSpan>ml</StyledSpan>
              </StyledNum>
              <StyledLeft>
                left: <StyledSpan2>{waterLeft(wat, getWater)}</StyledSpan2>{' '}
                <StyledSpan>ml</StyledSpan>
              </StyledLeft>
            </StyledDiv2>
            <StyledBtn onClick={openModal}>
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
