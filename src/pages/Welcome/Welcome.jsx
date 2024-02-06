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
import StyledButtons from '../../components/Buttons/Buttons';
import WelcomeAuthWrapper from '../../components/WelcomeAuthWrapper';

const Welcome = () => {
  const AdvantageList = [
    'Set goals',
    'Watch your calories',
    'Keep track of your water intake',
    'Control your weight',
  ];

  const innerContent = (
    <Content>
      <Title>Set goals and achieve them</Title>
      <Subtitle>The service will help you set goals and follow them.</Subtitle>

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
  );

  return (
    <div className="container">
      <Container>
        <WelcomeAuthWrapper>{innerContent}</WelcomeAuthWrapper>
      </Container>
    </div>
  );
};

export default Welcome;
