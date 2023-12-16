import {
  Container,
  Image,
  Content,
  Title,
  Subtitle,
  SubmitBtnContainer,
  SignInBtn,
  SignUpBtn,
  AdvantagesList,
  Bullet,
  AdvantagesItem,
} from './Welcome.styled';
import {
  imagePaths,
  imageName,
  basePath,
} from '../../images/Illustrations/Welcome/WelcomeImg';
import { generateSources } from '../../components/ResponsiveImg/ResponsiveImg';

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
        {generateSources(basePath, 'desk', imagePaths)}
        {generateSources(basePath, 'tab', imagePaths)}
        {generateSources(basePath, 'mob', imagePaths)}
        <Image
          src={`${basePath}/${imagePaths['desk'].png[0]}`}
          alt={`${imageName}`}
        />
      </picture>
      <Content>
        <Title>Set goals and achieve them</Title>
        <Subtitle>
          The service will help you set goals and follow them.
        </Subtitle>

        <SubmitBtnContainer>
          <SignInBtn to={'/signin'}>Sign in</SignInBtn>
          <SignUpBtn to={'/signup'}>Sign up</SignUpBtn>
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
