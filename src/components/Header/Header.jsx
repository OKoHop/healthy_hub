import { useMediaQuery } from 'react-responsive';
import {
  HeaderContainer,
  StyledHeader,
  StyledNavLogoLink,
  TargetSelectionList,
} from './Header.styled';
import { HeaderMobMenuBtn } from './HeaderMobMenuBtn/HeaderMobMenuBtn';
import { HeaderAuthNav } from './HeaderAuthNav/HeaderAuthNav';
import { HeaderUserInfoNav } from './HeaderUserInfoNav/HeaderUserInfoNav.jsx';
import { HeaderFrameTarget } from './HeaderFrameTarget/HeaderFrameTarget';
import { HeaderFrameWeight } from './HeaderFrameWeight/HeaderFrameWeight';
import { useAuth } from '../../hooks/useAuth';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 834px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });

  return (
    <>
      <StyledHeader>
        <HeaderContainer className="container">
          <StyledNavLogoLink to="/main">HealthyHub</StyledNavLogoLink>
          {isLoggedIn && isMobile && <HeaderMobMenuBtn />}
          {isLoggedIn && isTabletOrDesktop && (
            <TargetSelectionList>
              <li>
                <HeaderFrameTarget />
              </li>
              <li>
                <HeaderFrameWeight />
              </li>
            </TargetSelectionList>
          )}
          {isLoggedIn && <HeaderUserInfoNav />}
          {!isLoggedIn && <HeaderAuthNav />}
        </HeaderContainer>
      </StyledHeader>
    </>
  );
};
