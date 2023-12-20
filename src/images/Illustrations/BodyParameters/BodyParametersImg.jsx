import { generateSources } from '../../../components/ResponsiveImg/ResponsiveImg';

import _bodyParamImgDesk1x from './body_parameters_desk@1x.png';
import _bodyParamImgDesk2x from './body_parameters_desk@2x.png';
import _bodyParamImgTab1x from './body_parameters_tab@1x.png';
import _bodyParamImgTab2x from './body_parameters_tab@2x.png';
import _bodyParamImgMob1x from './body_parameters_mob@1x.png';
import _bodyParamImgMob2x from './body_parameters_mob@2x.png';

export const imagePaths = {
  desk: {
    png: [`${_bodyParamImgDesk1x}`, `${_bodyParamImgDesk2x}`],
  },
  tab: {
    png: [`${_bodyParamImgTab1x}`, `${_bodyParamImgTab2x}`],
  },
  mob: {
    png: [`${_bodyParamImgMob1x}`, `${_bodyParamImgMob2x}`],
  },
};

export const imageName = _bodyParamImgDesk1x.replace('/healthy_hub/src/images/Illustrations/Welcome/', '')
.split('_d')[0]  
  .split('.')[0]
  .replace(/_/g, ' '); 

 export const bodyParamSrcDesk = generateSources( imagePaths,'desk');
 
 export const bodyParamSrcTab = generateSources(imagePaths, 'tab');
 
 export const bodyParamSrcMob = generateSources(imagePaths, 'mob');
 
 export const bodyParamImgSrc = `${imagePaths['desk'].png[0]}`;
 
 export const bodyParamImgName = imageName;

