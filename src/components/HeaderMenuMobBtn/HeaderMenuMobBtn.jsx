import scgIcons from '../../images/Header/icons.svg';
import { BtnMenuMob, SvgMenuMobBtn } from './HeaderMenuMobBtn.styled';

export const HeaderMenuMobBtn = () => {
  return (
    <BtnMenuMob>
      <SvgMenuMobBtn>
        <use href={`${scgIcons}#icon-menu`}></use>
      </SvgMenuMobBtn>
    </BtnMenuMob>
  );
};
