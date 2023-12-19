import { HeaderFrameTarget } from '../HeaderFrameTarget/HeaderFrameTarget';
import { HeaderFrameWeight } from '../HeaderFrameWeight/HeaderFrameWeight';

import { MobMenu, MobMenuList } from './HeaderMobMenu.styled';

export const HeaderMobMenu = () => {
  return (
    <MobMenu>
      <MobMenuList>
        <li>
          <HeaderFrameTarget />
        </li>
        <li>
          <HeaderFrameWeight />
        </li>
      </MobMenuList>
    </MobMenu>
  );
};
