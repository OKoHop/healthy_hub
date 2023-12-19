import { generateSources } from '../../../components/ResponsiveImg/ResponsiveImg';

import _genderAgeImgDesk1x from './gender_and_age_desk@1x.png';
import _genderAgeImgDesk2x from './gender_and_age_desk@2x.png';
import _genderAgeImgTab1x from './gender_and_age_tab@1x.png';
import _genderAgeImgTab2x from './gender_and_age_tab@2x.png';
import _genderAgeImgMob1x from './gender_and_age_mob@1x.png';
import _genderAgeImgMob2x from './gender_and_age_mob@2x.png';

export const imagePaths = {
  desk: {
    png: [`${_genderAgeImgDesk1x}`, `${_genderAgeImgDesk2x}`],
  },
  tab: {
    png: [`${_genderAgeImgTab1x}`, `${_genderAgeImgTab2x}`],
  },
  mob: {
    png: [`${_genderAgeImgMob1x}`, `${_genderAgeImgMob2x}`],
  },
};

export const imageName = _genderAgeImgDesk1x.replace('/healthy_hub/src/images/Illustrations/Welcome/', '')
.split('_d')[0]  
  .split('.')[0]
  .replace(/_/g, ' '); 

 export const genderAgeSrcDesk = generateSources( imagePaths,'desk');
 
 export const genderAgeSrcTab = generateSources(imagePaths, 'tab');
 
 export const genderAgeSrcMob = generateSources(imagePaths, 'mob');
 
 export const genderAgeImgSrc = `${imagePaths['desk'].png[0]}`;
 
 export const genderAgeImgName = imageName;
