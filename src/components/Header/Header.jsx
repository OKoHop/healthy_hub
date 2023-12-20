import { useMediaQuery } from 'react-responsive';
import {
  HeaderContainer,
  StyledHeader,
  StyledNavLogoLink,
  TargetSelectionList,
} from './Header.styled';
import { HeaderMobMenuBtn } from './HeaderMobMenuBtn/HeaderMobMenuBtn';
import { HeaderAuthNav } from './HeaderAuthNav/HeaderAuthNav';
import { HeaderUserInfo } from './HeaderUserInfo/HeaderUserInfo';
import { HeaderFrameTarget } from './HeaderFrameTarget/HeaderFrameTarget';
import { HeaderFrameWeight } from './HeaderFrameWeight/HeaderFrameWeight';
import { useAuth } from '../../hooks/useAuth';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  const isTabletorDesktop = useMediaQuery({ query: '(min-width: 834px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });

  return (
    <>
      <StyledHeader>
        <HeaderContainer className="container" id="header_modal">
          <StyledNavLogoLink to="/main">HealthyHub</StyledNavLogoLink>
          {isLoggedIn && isMobile && <HeaderMobMenuBtn />}
          {isLoggedIn && isTabletorDesktop && (
            <TargetSelectionList>
              <li>
                <HeaderFrameTarget />
              </li>
              <li>
                <HeaderFrameWeight />
              </li>
            </TargetSelectionList>
          )}
          {isLoggedIn && <HeaderUserInfo />}
          {!isLoggedIn && <HeaderAuthNav />}
        </HeaderContainer>
      </StyledHeader>
    </>
  );
};
