import styled from 'styled-components';

export const TargetFrame = styled.div`
  width: 100%;
  font-style: normal;
  line-height: 20px;
  display: flex;
  gap: 12px;
`;

export const TargetImgBorder = styled.div`
  padding: 10px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #5f5e5c;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.01);
`;

export const ImgTarget = styled.img`
  width: 28px;
  height: 28px;
`;

export const TargetContainerBtn = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 3px 0;
`;

export const TargetBtn = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const TitleGoal = styled.p`
  font-weight: 600;
`;

export const TargetSelected = styled.p`
  font-weight: 500;
  margin-right: 4px;
`;

export const SvgArroyRight = styled.svg`
  width: 16px;
  height: 16px;
`;
