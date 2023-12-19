import { theme } from '../../theme';
import {
  Container,
  Content,
  Title,
  Subtitle,
  SubmitBtnContainer,
  AdvantagesList,
  Bullet,
  AdvantagesItem,
} from './Welcome.styled';
import {
  welcomeSrcMob,
  welcomeSrcTab,
  welcomeSrcDesk,
  welcomeImgSrc,
  welcomeImgName,
} from '../../images/Illustrations/Welcome/WelcomeImg';
import StyledButtons from '../../components/Buttons/Buttons';
import StyledImage from '../../components/ResponsiveImg/ImageAdaptSize';

const Welcome = () => {
  const AdvantageList = [
    'Set goals',
    'Watch your calories',
    'Keep track of your water intake',
    'Control your weight',
  ];
  return (
    <Container>
      <picture>
        {welcomeSrcMob}
        {welcomeSrcTab}
        {welcomeSrcDesk}
        <StyledImage
          src={welcomeImgSrc}
          alt={welcomeImgName}
          widthMob={'300px'}
          marginMob={'24px auto'}
          widthTab={'380px'}
          marginTab={'0 0 80px 0'}
          widthDesk={'592px'}
          marginDesk={'40px 104px 72px 0'}
        />
      </picture>
      <Content>
        <Title>Set goals and achieve them</Title>
        <Subtitle>
          The service will help you set goals and follow them.
        </Subtitle>

        <SubmitBtnContainer>
          <StyledButtons
            to={'/signin'}
            text={'Sign In'}
            width={'122px'}
            textColor={theme.colors.primaryBlack2}
            backGrColor={theme.colors.primaryGreenLite}
            borderColor={'transparent'}
            widthTab={'192px'}
            backGrColorHov={theme.colors.primaryBlack2}
            borderColorHov={theme.colors.primaryGreenLite}
            textColorHov={theme.colors.primaryWhite}
            type={'submit'}
          />

          <StyledButtons
            to={'/signup'}
            text={'Sign Up'}
            width={'122px'}
            textColor={theme.colors.primaryWhite}
            backGrColor={theme.colors.primaryBlack2}
            borderColor={theme.colors.primaryBlack2}
            backGrColorHov={theme.colors.primaryBlack2}
            borderColorHov={theme.colors.primaryGreenLite}
            textColorHov={theme.colors.primaryWhite}
            widthTabHov={'192px'}
            type={'submit'}
          />
        </SubmitBtnContainer>

        <AdvantagesList>
          {AdvantageList.map((advantage, index) => (
            <AdvantagesItem key={index}>
              <Bullet>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="none"
                >
                  <circle cx="4" cy="4" r="4" fill="#E3FFA8" />
                </svg>
              </Bullet>
              {advantage}
            </AdvantagesItem>
          ))}
        </AdvantagesList>
      </Content>
    </Container>
  );
};

export default Welcome;
