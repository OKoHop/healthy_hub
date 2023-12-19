import { theme } from '../../theme';
import {
  Container,
  Content,
  Title,
  Subtitle,
  SubmitBtnContainer,
  AdvantagesList,
  Bullet,
  AdvantagesItem
} from './Welcome.styled';
import {
  welcomeSrcMob,
  welcomeSrcTab,
  welcomeSrcDesk,
  welcomeImgSrc,
  welcomeImgName
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
          mobwidth={'300px'}
          mobmargin={'24px auto'}
          tabwidth={'380px'}
          tabmargin={'0 0 80px 0'}
          deskwidth={'592px'}
          deskmargin={'40px 104px 72px 0'}
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
            textcolor={theme.colors.primaryBlack2}
            backgcolor={theme.colors.primaryGreenLite}
            bordercolor={'transparent'}
            tabwidth={'192px'}
            hoverbgcolor={theme.colors.primaryBlack2}
            hoverborder={theme.colors.primaryGreenLite}
            hovertextcolor={theme.colors.primaryWhite}
            type={'submit'}
          />

          <StyledButtons
            to={'/signup'}
            text={'Sign Up'}
            width={'122px'}
            textcolor={theme.colors.primaryWhite}
            backgcolor={theme.colors.primaryBlack2}
            bordercolor={theme.colors.primaryBlack2}
            hoverbgcolor={theme.colors.primaryBlack2}
            hoverborder={theme.colors.primaryGreenLite}
            hovertextcolor={theme.colors.primaryWhite}
            hovertabwidth={'192px'}
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
