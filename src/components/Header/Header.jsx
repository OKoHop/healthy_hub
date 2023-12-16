import {
  HeaderContainer,
  StyledHeader,
  StyledNavLogoLink,
} from './Header.styled';
import { HeaderMenuMobBtn } from '../HeaderMenuMobBtn/HeaderMenuMobBtn';
import { HeaderAuthNav } from '../HeaderAuthNav/HeaderAuthNav';
import { HeaderUserInfo } from '../HeaderUserInfo/HeaderUserInfo';

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <HeaderContainer className="container">
          <StyledNavLogoLink to="/main">HealthyHub</StyledNavLogoLink>
          {/* <HeaderAuthNav/> */}
          <>
            <HeaderMenuMobBtn />
            <HeaderUserInfo />
          </>
        </HeaderContainer>
      </StyledHeader>
    </>
  );
};
