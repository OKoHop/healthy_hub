import { useState } from 'react';
import { StyledSubtitle } from '../DailyGoal/DailyGoal.style';
import {
  BtnDiv,
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

const Water = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const wat = useSelector(water);
  const watIntake = useSelector(waterIntake);
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function waterLeft(wat, watIntake) {
    if (wat - watIntake < 0) {
      return 0;
    }
    return Math.round(wat - watIntake);
  }

  function persentWater(wat, waterIntake) {
    if ((waterIntake / wat) * 100 >= 100) {
      return 100;
    }
    return Math.round((waterIntake / wat) * 100);
  }

  return (
    <>
      <Thumb>
        <StyledSubtitle>Water</StyledSubtitle>
        <StyledDiv>
          <StyledDiagram>
            <P>{persentWater(wat, watIntake)} %</P>

            <Progress></Progress>
          </StyledDiagram>
          <div>
            <Svg
              onClick={() => {
                dispatch(delWaterIntake());
                toast.success('WaterIntake has been successfuly reset');
              }}
            >
              <use href={`${svgSlice}#trash`}></use>
            </Svg>
            <StyledP>Water consumption</StyledP>
            <StyledDiv2>
              <StyledNum>
                {watIntake} <StyledSpan>ml</StyledSpan>
              </StyledNum>
              <StyledLeft>
                left: <StyledSpan2>{waterLeft(wat, watIntake)}</StyledSpan2>{' '}
                <StyledSpan>ml</StyledSpan>
              </StyledLeft>
            </StyledDiv2>
            <StyledBtn onClick={openModal}>
              <BtnDiv>
                <SVG>
                  <use href={`${svgSlice}#add`}></use>
                </SVG>
                Add water intake
              </BtnDiv>
            </StyledBtn>
          </div>
        </StyledDiv>
      </Thumb>
      <WaterModal open={modalIsOpen} close={closeModal} />
    </>
  );
};

export default Water;
