import {
    BtnUser,
  SvgUserBtn,
  UserInfo,
  UserName,
  UserPohotoStub,
} from './HeaderUserInfo.style';
import scgIcons from '../../images/Header/icons.svg';

export const HeaderUserInfo = () => {
  const userName = 'Konstantin';
  const firstLetter = userName ? userName[0].toUpperCase() : '';
  return (
    <UserInfo>
      <UserName>Konstantin</UserName>
      <UserPohotoStub>{firstLetter}</UserPohotoStub>
      <BtnUser>
        <SvgUserBtn>
          <use href={`${scgIcons}#icon-arrow-down`}></use>
        </SvgUserBtn>
      </BtnUser>
    </UserInfo>
  );
};
