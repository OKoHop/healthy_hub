import {
  welcomeImgName,
  welcomeImgSrc,
  welcomeSrcDesk,
  welcomeSrcMob,
  welcomeSrcTab,
} from '../../images/Illustrations/Welcome/WelcomeImg';

import {
  Media,
  WelcomeAuthWrapperContainer,
} from './WelcomeAuthWrapper.styled';

const WelcomeAuthWrapper = ({ children }) => {
  return (
    <WelcomeAuthWrapperContainer>
      <Media>
        <picture>
          {welcomeSrcDesk}
          {welcomeSrcTab}
          {welcomeSrcMob}
          <img src={welcomeImgSrc} alt={welcomeImgName} />
        </picture>
      </Media>

      {children}
    </WelcomeAuthWrapperContainer>
  );
};

export default WelcomeAuthWrapper;
