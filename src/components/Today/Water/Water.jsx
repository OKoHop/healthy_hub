import { useState } from 'react';
import { StyledSubtitle } from '../DailyGoal/DailyGoal.style';
import {
  BtnDiv,
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
  Thumb,
} from './Water.style';
import svgSlice from '../../../images/Today/today-svg-sprite.svg';
import WaterModal from '../Modal/Modal';

const Water = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

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
          <StyledDiagram></StyledDiagram>
          <div>
            <StyledP>Water consumption</StyledP>
            <StyledDiv2>
              <StyledNum>
                1050 <StyledSpan>ml</StyledSpan>
              </StyledNum>
              <StyledLeft>
                left: <StyledSpan2>450</StyledSpan2> <StyledSpan>ml</StyledSpan>
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
