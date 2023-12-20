import { generateSources } from '../../../components/ResponsiveImg/ResponsiveImg';

import _profSetImgDesk1x from './interactive_learning_desk@1x.png';
import _profSetImgDesk2x from './interactive_learning_desk@2x.png';
import _profSetImgTab1x from './interactive_learning_tab@1x.png';
import _profSetImgTab2x from './interactive_learning_tab@2x.png';
import _profSetImgMob1x from './interactive_learning_mob@1x.png';
import _profSetImgMob2x from './interactive_learning_mob@2x.png';

export const imagePaths = {
  desk: {
    png: [`${_profSetImgDesk1x}`, `${_profSetImgDesk2x}`],
  },
  tab: {
    png: [`${_profSetImgTab1x}`, `${_profSetImgTab2x}`],
  },
  mob: {
    png: [`${_profSetImgMob1x}`, `${_profSetImgMob2x}`],
  },
};

export const imageName = _profSetImgDesk1x.replace('/healthy_hub/src/images/Illustrations/Welcome/', '')
.split('_d')[0]  
  .split('.')[0]
  .replace(/_/g, ' '); 

 export const profSetSrcDesk = generateSources( imagePaths,'desk');
 
 export const profSetSrcTab = generateSources(imagePaths, 'tab');
 
 export const profSetSrcMob = generateSources(imagePaths, 'mob');
 
 export const profSetImgSrc = `${imagePaths['desk'].png[0]}`;
 
 export const profSetImgName = imageName;