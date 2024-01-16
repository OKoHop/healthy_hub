import styled from 'styled-components';

const shouldForwardProp = (prop) => prop !== 'isSelected';

export const BtnClose = styled.button`
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  position: absolute;
  top: 20px;
  right: 32px;
  color: ${(p) => p.theme.colors.primaryWhite};
  transition: ${(p) => p.theme.transition.customTrans};
`;

export const SvgClose = styled.svg`
  stroke: ${(p) => p.theme.colors.primaryGray};
  width: 16px;
  height: 16px;
  transition: ${(p) => p.theme.transition.customTrans};
  &:hover,
  :focus {
    transform: scale(1.05);
    stroke: ${(p) => p.theme.colors.primaryGreenLite};
  }
`;

export const TitleCurrentTarget = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`;

export const TextCurrentTarget = styled.p`
  margin-top: 8px;
  width: 284px;
  color: ${(p) => p.theme.colors.primaryGray};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const BtnCancel = styled.button`
  margin: 24px auto 0;
  width: 192px;
  height: 20px;
  border: inherit;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.colors.primaryGray};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const FormTarget = styled.form`
  margin-top: 16px;
`;

export const FormTargetList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormTargetInput = styled.input`
  appearance: none;
`;

export const TargetImgBorder = styled.div`
  padding: 10px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${(p) =>
      p.isSelected
        ? p.theme.colors.primaryViolet
        : p.theme.colors.secondaryGray1};
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.01);
`;

export const ImgTarget = styled.img`
  width: 28px;
  height: 28px;
`;

export const FormTargetLabel = styled.label`
  display: flex;
  align-items: center;
  cursor:pointer;
  gap: 12px;
  color: ${(p) =>
    p.isSelected ? p.theme.colors.primaryViolet : p.theme.colors.primaryWhite};
`;

export const FormTargetBtn = styled.button`
  width: 100%;
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid ${(p) => p.theme.colors.primaryGreenLite};
  background: ${(p) => p.theme.colors.primaryGreenLite};
  color: ${(p) => p.theme.colors.primaryBlack2};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  transition: ${(p) => p.theme.transition.customTrans};
  @media (${(p) => p.theme.mq.tabMin}) {
    width: 166px;
  }

  &:hover,
  :focus {
    background: transparent;
    border: 1px solid ${(p) => p.theme.colors.primaryGreenLite};
    color: ${(p) => p.theme.colors.primaryWhite};
  }
`;

BtnClose.shouldForwardProp = shouldForwardProp;
SvgClose.shouldForwardProp = shouldForwardProp;
TitleCurrentTarget.shouldForwardProp = shouldForwardProp;
TextCurrentTarget.shouldForwardProp = shouldForwardProp;
BtnCancel.shouldForwardProp = shouldForwardProp;
FormTarget.shouldForwardProp = shouldForwardProp;
FormTargetList.shouldForwardProp = shouldForwardProp;
FormTargetInput.shouldForwardProp = shouldForwardProp;
TargetImgBorder.shouldForwardProp = shouldForwardProp;
ImgTarget.shouldForwardProp = shouldForwardProp;
FormTargetLabel.shouldForwardProp = shouldForwardProp;
FormTargetBtn.shouldForwardProp = shouldForwardProp;
