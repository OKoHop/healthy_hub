import {
  HeaderContainer,
  StyledHeader,
  StyledNavLogoLink,
} from './Header.styled';
import { HeaderMobMenuBtn } from '../HeaderMobMenuBtn/HeaderMobMenuBtn';
import { HeaderAuthNav } from '../HeaderAuthNav/HeaderAuthNav';
import { HeaderUserInfo } from '../HeaderUserInfo/HeaderUserInfo';

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <HeaderContainer className="container">
          <StyledNavLogoLink to="/main">HealthyHub</StyledNavLogoLink>
          <HeaderMobMenuBtn />

          {/* <HeaderAuthNav/> */}
          <HeaderUserInfo />
        </HeaderContainer>
      </StyledHeader>
    </>
  );
};
