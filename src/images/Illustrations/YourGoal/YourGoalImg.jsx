import { generateSources } from '../../../components/ResponsiveImg/ResponsiveImg';

import _yourGoalImgDesk1x from './summer_hiking_desk@1x.png';
import _yourGoalImgDesk2x from './summer_hiking_desk@2x.png';  
import _yourGoalImgTab1x from './summer_hiking_tab@1x.png';
import _yourGoalImgTab2x from './summer_hiking_tab@2x.png';
import _yourGoalImgMob1x from './summer_hiking_mob@1x.png';
import _yourGoalImgMob2x from './summer_hiking_mob@2x.png';

export const imagePaths = {
  desk: {
    png: [`${_yourGoalImgDesk1x}`, `${_yourGoalImgDesk2x}`],
  },
  tab: {
    png: [`${_yourGoalImgTab1x}`, `${_yourGoalImgTab2x}`],
  },
  mob: {
    png: [`${_yourGoalImgMob1x}`, `${_yourGoalImgMob2x}`],
  },
};

export const imageName = _yourGoalImgDesk1x.replace('/healthy_hub/src/images/Illustrations/Welcome/', '')
.split('_d')[0]  
  .split('.')[0]
  .replace(/_/g, ' '); 

 export const yourGoalSrcDesk = generateSources( imagePaths,'desk');
 
 export const yourGoalSrcTab = generateSources(imagePaths, 'tab');
 
 export const yourGoalSrcMob = generateSources(imagePaths, 'mob');
 
 export const yourGoalImgSrc = `${imagePaths['desk'].png[0]}`;
 
 export const yourGoalImgName = imageName;