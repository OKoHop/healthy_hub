import { generateSources } from '../../../components/ResponsiveImg/ResponsiveImg';

 import _recomFoodImgDesk1x from './ketogenic_diet_desk@1x.png';
import _recomFoodImgDesk2x from './ketogenic_diet_desk@2x.png';
import _recomFoodImgTab1x from './ketogenic_diet_tab@1x.png';
import _recomFoodImgTab2x from './ketogenic_diet_tab@2x.png';
import _recomFoodImgMob1x from './ketogenic_diet_mob@1x.png';
import _recomFoodImgMob2x from './ketogenic_diet_mob@2x.png';

export const imagePaths = {
  desk: {
    png: [`${_recomFoodImgDesk1x}`, `${_recomFoodImgDesk2x}`],
  },
  tab: {
    png: [`${_recomFoodImgTab1x}`, `${_recomFoodImgTab2x}`],
  },
  mob: {
    png: [`${_recomFoodImgMob1x}`, `${_recomFoodImgMob2x}`],
  },
};

export const imageName = _recomFoodImgDesk1x.replace('/healthy_hub/src/images/Illustrations/Welcome/', '')
.split('_d')[0]  
  .split('.')[0]
  .replace(/_/g, ' '); 

 export const recomFoodSrcDesk = generateSources( imagePaths,'desk');
 
 export const recomFoodSrcTab = generateSources(imagePaths, 'tab');
 
 export const recomFoodSrcMob = generateSources(imagePaths, 'mob');
 
 export const recomFoodImgSrc = `${imagePaths['desk'].png[0]}`;
 
 export const recomFoodImgName = imageName;