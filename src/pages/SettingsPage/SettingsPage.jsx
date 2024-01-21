import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import { updateUser } from '../../redux/user/operations';
import { selectUser } from '../../redux/auth/selectors';

import {
  SettingsPageSection,
  SettingsPageContainer,
  TitlePage,
  ButtonContainer,
  CancelButton,
  SaveButton,
  ProfileSettingsContainer,
  BannerThumb,
  Img,
  FormFormik,
  Label,
  Input,
  ErrorMsg,
  InputFileContainer,
  AvaThumb,
  AvaImg,
  WrapperRadioButton,
  FormGroup,
  FormGroupLabel,
  LinkDownloadPhoto,
} from './SettingsPage.styled';
import BackLink from '../../components/BackLink';

import setingsPage from '../../images/settingsPageImages/setings-page.png';
import downloadPhoto from '../../images/settingsPageImages/download-new-photo.svg';
import avatar from '../../images/settingsPageImages/profile-circle.svg';

import CustomRadioButton from '../../components/SettingsPage/CustomRadioButton';
import { refreshUser } from '../../redux/auth/operations';
import { useState } from 'react';
import { getStatistics } from '../../redux/Today/Food/operations';
import LoaderWithBackdrop from '../../components/LoaderSpinner';

const validationSchema = yup.object({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .min(2, 'Name must be at least 2 characters long.')
    .max(50, 'Name must be no more than 50 characters.')
    .required('Name is required')
    .trim('Name cannot include leading and trailing spaces')
    .strict(true),
  age: yup
    .number()
    .min(18, 'Age must be at least 18 years old')
    .max(110, 'Age must be no more than 110 years old')
    .required('Age is required')
    .integer('Age must be an integer'),
  height: yup
    .number()
    .min(120, 'Height must be at least 120cm')
    .max(220, 'Height must be no more than 220cm')
    .required('Height is required')
    .integer('Height must be an integer'),
  weight: yup
    .number()
    .min(40, 'Weight must be at least 40kg')
    .max(200, 'Weight must be no more than 200kg')
    .required('Weight is required')
    .test(
      'maxDigitsAfterDecimal',
      'Must have 1 digits after decimal',
      (number) => /^\d+(\.\d{1})?$/.test(number)
    ),
});

const SettingsPage = () => {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const dispatch = useDispatch();
  const userProfile = useSelector(selectUser);

  const initialValues = {
    name: userProfile.name,
    age: userProfile.age,
    gender: userProfile.gender,
    height: userProfile.height,
    weight: userProfile.weight,
    activity: userProfile?.activity?.toString() || '',
    // avatarPreview: userProfile.avatarURL,
    // userAvatarFile: null,
  };

  const handleSaveClick = async (values, formik) => {
    setLoading(true);
    /*     const valuesWithFile = {
      ...values,
      userAvatarFile: selectedFile,
    }; */
    await dispatch(updateUser(values));
    await dispatch(refreshUser());
    await dispatch(getStatistics());
    setLoading(false);
    /* dispatch(refreshUser()); */
  };

  const handleCancelClick = (formik) => {
    formik.resetForm({ values: initialValues });
  };

  const handleChangeInputFile = (event, formik) => {
    const selectedFile = event.target.files[0];
    setSelectedFile(selectedFile);

    if (!selectedFile) return;

    const selectedFileUrl = URL.createObjectURL(selectedFile);

    formik.setFieldValue('userAvatarFile', selectedFile);
    formik.setFieldValue('avatarPreview', selectedFileUrl);
  };

  return (
    <SettingsPageSection>
      {loading && <LoaderWithBackdrop />}
      <SettingsPageContainer>
        <TitlePage>
          <BackLink />
          Profile setting
        </TitlePage>

        <ProfileSettingsContainer>
          <BannerThumb>
            <Img src={setingsPage} alt="Banner setings page" />
          </BannerThumb>

          <Formik
            initialValues={initialValues}
            onSubmit={(values, formik) => handleSaveClick(values, formik)}
            validationSchema={validationSchema}
          >
            {(formik) => (
              <FormFormik>
                <Label>
                  Your name
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                  <ErrorMsg name="name" component="div" />
                </Label>

                <InputFileContainer>
                  Your photo
                  <Input
                    type="file"
                    name="userAvatarFile"
                    id="userAvatarFile"
                    accept="image/*"
                    onChange={(e) => handleChangeInputFile(e, formik)}
                    value=""
                  />
                  <Label htmlFor="userAvatarFile">
                    <AvaThumb>
                      <AvaImg
                        src={userProfile.avatarURL || avatar}
                        alt="userAvatar"
                      />
                    </AvaThumb>
                    <LinkDownloadPhoto>
                      <img src={downloadPhoto} alt="Select File" />
                      Download new photo
                    </LinkDownloadPhoto>
                  </Label>
                </InputFileContainer>

                <Label>
                  Your age
                  <Input
                    type="number"
                    name="age"
                    placeholder="Enter your age"
                    required
                  />
                  <ErrorMsg name="age" component="div" />
                </Label>

                <FormGroup role="group" aria-labelledby="gender-head">
                  <FormGroupLabel id="gender-head">Gender</FormGroupLabel>
                  <WrapperRadioButton>
                    <CustomRadioButton
                      type="radio"
                      name="gender"
                      value="male"
                      selectedValue={formik.values.gender}
                      text="Male"
                    />
                    <CustomRadioButton
                      type="radio"
                      name="gender"
                      value="female"
                      selectedValue={formik.values.gender}
                      text="Female"
                    />
                  </WrapperRadioButton>
                </FormGroup>

                <Label>
                  Height
                  <Input
                    type="number"
                    name="height"
                    placeholder="Enter your height"
                    required
                  />
                  <ErrorMsg name="height" component="div" />
                </Label>

                <Label>
                  Weight
                  <Input
                    type="number"
                    name="weight"
                    placeholder="Enter your weight"
                    required
                  />
                  <ErrorMsg name="weight" component="div" />
                </Label>

                <FormGroup role="group" aria-labelledby="activity-head">
                  <FormGroupLabel id="activity-head">
                    Your activity
                  </FormGroupLabel>
                  <CustomRadioButton
                    name="activity"
                    id="activity1"
                    value="1.2"
                    selectedValue={formik.values.activity}
                    text="1.2 - if you do not have physical activity and sedentary work"
                  />
                  <CustomRadioButton
                    name="activity"
                    id="activity2"
                    value="1.375"
                    selectedValue={formik.values.activity}
                    text="1.375 - if you do short runs or light gymnastics 1-3 times a week"
                  />
                  <CustomRadioButton
                    name="activity"
                    id="activity3"
                    value="1.55"
                    selectedValue={formik.values.activity}
                    text="1.55 - if you play sports with average loads 3-5 times a week"
                  />
                  <CustomRadioButton
                    name="activity"
                    id="activity4"
                    value="1.725"
                    selectedValue={formik.values.activity}
                    text="1.725 - if you train fully 6-7 times a week"
                  />
                  <CustomRadioButton
                    name="activity"
                    id="activity5"
                    value="1.9"
                    selectedValue={formik.values.activity.toString()}
                    text="1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"
                  />
                </FormGroup>

                <ButtonContainer>
                  <SaveButton type="submit">Save</SaveButton>
                  <CancelButton
                    type="button"
                    onClick={() => handleCancelClick(formik)}
                  >
                    Cancel
                  </CancelButton>
                </ButtonContainer>
              </FormFormik>
            )}
          </Formik>
        </ProfileSettingsContainer>
      </SettingsPageContainer>
    </SettingsPageSection>
  );
};

export default SettingsPage;
