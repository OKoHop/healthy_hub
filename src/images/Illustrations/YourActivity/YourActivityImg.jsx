import { generateSources } from '../../../components/ResponsiveImg/ResponsiveImg';

import _yourActivityImgDesk1x from './activity_desk@1x.png';
import _yourActivityImgDesk2x from './activity_desk@2x.png';
import _yourActivityImgTab1x from './activity_tab@1x.png';
import _yourActivityImgTab2x from './activity_tab@2x.png';
import _yourActivityImgMob1x from './activity_mob@1x.png';
import _yourActivityImgMob2x from './activity_mob@2x.png';

export const imagePaths = {
  desk: {
    png: [`${_yourActivityImgDesk1x}`, `${_yourActivityImgDesk2x}`],
  },
  tab: {
    png: [`${_yourActivityImgTab1x}`, `${_yourActivityImgTab2x}`],
  },
  mob: {
    png: [`${_yourActivityImgMob1x}`, `${_yourActivityImgMob2x}`],
  },
};

export const imageName = _yourActivityImgDesk1x.replace('/healthy_hub/src/images/Illustrations/Welcome/', '')
.split('_d')[0]  
  .split('.')[0]
  .replace(/_/g, ' '); 

 export const activitySrcDesk = generateSources( imagePaths,'desk');
 
 export const activitySrcTab = generateSources(imagePaths, 'tab');
 
 export const activitySrcMob = generateSources(imagePaths, 'mob');
 
 export const activityImgSrc = `${imagePaths['desk'].png[0]}`;
 
 export const activityImageName = imageName;