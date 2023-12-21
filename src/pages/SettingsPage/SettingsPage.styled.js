import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const SettingsPageSection = styled.main`
  background-color: ${props => props.theme.colors.primaryBlack};
  color: ${props => props.theme.colors.primaryWhite};
  padding-top: 16px;
  padding-bottom: 20px;

  @media screen and (${props => props.theme.mq.tabMin}) {
    padding-top: 24px;
    padding-bottom: 20px;
  }

  @media screen and (${props => props.theme.mq.deskMin}) {
    padding-top: 20px;
  }
`;

export const SettingsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 10px;
  width: 320px;

  @media screen and (${props => props.theme.mq.tabMin}) {
    width: 834px;
    padding: 0 27px;
    position: relative;
  }

  @media screen and (${props => props.theme.mq.deskMin}) {
    width: 1440px;
    padding: 0 34px;
  }
`;

export const TitlePage = styled.h1`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: 30px;

  @media screen and (${props => props.theme.mq.tabMin}) {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 36px;
  }

  @media screen and (${props => props.theme.mq.deskMin}) {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 36px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;

  @media screen and (${props => props.theme.mq.tabMin}) {
    position: absolute;
    flex-direction: row-reverse;
    top: 0;
    right: 0;
    margin-top: 0;
    margin-right: 27px;
  }

  @media screen and (${props => props.theme.mq.deskMin}) {
    position: absolute;
    flex-direction: row-reverse;
    margin-right: 34px;
  }
`;

export const CancelButton = styled.button`
  background-color: ${props => props.theme.colors.primaryBlack};
  color: ${props => props.theme.colors.primaryWhite};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 20px;

  width: 100%;
  padding: 8px 12px;
  border: ${p => p.theme.borders.normal} transparent;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${p => p.theme.colors.primaryGreenLite};
  }

  @media screen and (${props => props.theme.mq.tabMin}) {
    width: 212px;
  }
`;

export const SaveButton = styled.button`
  background-color: ${props => props.theme.colors.primaryGreenLite};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;

  width: 212px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.primaryGreenLite};
  border-radius: 12px;
  padding: 8px;
  cursor: pointer;

  @media screen and (max-width: 833px) {
    width: 100%;
  }
`;

export const ProfileSettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;

  @media screen and (${props => props.theme.mq.tabMin}) {
    margin-top: 20px;
  }

  @media screen and (${props => props.theme.mq.deskMin}) {
    flex-direction: row;
    align-items: start;
    justify-content: center;
    gap: 100px;
    margin-top: 16px;
  }
`;

export const BannerThumb = styled.div`
  width: 300px;
  margin-bottom: 24px;

  @media screen and (${props => props.theme.mq.tabMin}) {
    width: 380px;
  }

  @media screen and (${props => props.theme.mq.deskMin}) {
    width: 536px;
    margin-bottom: 0;
  }
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const FormFormik = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 100%;

  @media screen and (${props => props.theme.mq.tabMin}) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 60px;
    width: 499px;

    & > :not(div[aria-labelledby='activity-head']) {
      width: calc((100% - 60px) / 2);
    }
  }
`;

export const Label = styled.label`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  &[for='userAvatarFile'] {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }
`;

export const Input = styled(Field)`
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 20px;
  background-color: ${props => props.theme.colors.primaryBlack};
  color: ${props => props.theme.colors.primaryWhite};

  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid ${props => props.theme.colors.gray};

  &:hover {
    border-color: ${props => props.theme.colors.primaryGreenLite};
  }

  &[type='file'] {
    visibility: hidden;
    pointer-events: none;
    display: none;
  }
  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${p => p.theme.colors.primaryGray};
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 10px;
  line-height: 12px;
  color: ${p => p.theme.colors.error};
`;

export const InputFileContainer = styled.div`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;

  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  & > label {
    font-size: ${props => props.theme.fontSizes.xs};
    font-weight: ${props => props.theme.fontWeights.medium};
    line-height: 20px;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const FormGroupLabel = styled.p`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;
  margin-bottom: 12px;
`;

export const WrapperRadioButton = styled.div`
  display: flex;
  gap: 16px;
  height: 100%;
`;

export const AvaThumb = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin-right: 12px;
  overflow: hidden;
`;

export const AvaImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LinkDownloadPhoto = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  & > img {
    width: 16px;
    height: 16px;
  }
`;
