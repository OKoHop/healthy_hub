import { generateSources } from '../../../components/ResponsiveImg/ResponsiveImg';

import _welcomeImgDesk1x from './sport_fit_tracker_desk@1x.png';
import _welcomeImgDesk2x from './sport_fit_tracker_desk@2x.png';
import _welcomeImgTab1x from './sport_fit_tracker_tab@1x.png';
import _welcomeImgTab2x from './sport_fit_tracker_tab@2x.png';
import _welcomeImgMob1x from './sport_fit_tracker_mob@1x.png';
import _welcomeImgMob2x from './sport_fit_tracker_mob@2x.png';

export const imagePaths = {
  desk: {
    png: [`${_welcomeImgDesk1x}`, `${_welcomeImgDesk2x}`],
  },
  tab: {
    png: [`${_welcomeImgTab1x}`, `${_welcomeImgTab2x}`],
  },
  mob: {
    png: [`${_welcomeImgMob1x}`, `${_welcomeImgMob2x}`],
  },
};

export const imageName = _welcomeImgDesk1x.replace('/healthy_hub/src/images/Illustrations/Welcome/', '')
.split('_d')[0]  
  .split('.')[0]
  .replace(/_/g, ' '); 

 export const welcomeSrcDesk = generateSources( imagePaths,'desk');
 
 export const welcomeSrcTab = generateSources(imagePaths, 'tab');
 
 export const welcomeSrcMob = generateSources(imagePaths, 'mob');
 
 export const welcomeImgSrc = `${imagePaths['desk'].png[0]}`;
 
 export const welcomeImgName = imageName;