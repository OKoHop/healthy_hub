import { useState } from 'react';
import { StyledSubtitle } from '../DailyGoal/DailyGoal.style';
import {
  BtnDiv,
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
import { useSelector } from 'react-redux';
import { water } from '../../../redux/Today/Daily/selectors';

const Water = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const wat = useSelector(water);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Thumb>
        <StyledSubtitle>Water</StyledSubtitle>
        <StyledDiv>
          <StyledDiagram>
            <Progress></Progress>
          </StyledDiagram>
          <div>
            <Svg>
              <use href={`${svgSlice}#trash`}></use>
            </Svg>
            <StyledP>Water consumption</StyledP>
            <StyledDiv2>
              <StyledNum>
                1050 <StyledSpan>ml</StyledSpan>
              </StyledNum>
              <StyledLeft>
                left: <StyledSpan2>{wat ? wat : 0}</StyledSpan2>{' '}
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
