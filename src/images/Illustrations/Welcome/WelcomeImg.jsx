import { generateSources } from '../../../components/ResponsiveImg/ResponsiveImg';

export const imagePaths = {
  desk: {
    png: ['sport_fit_tracker_desk@1x.png', 'sport_fit_tracker_desk@2x.png'],
  },
  tab: {
    png: ['sport_fit_tracker_tab@1x.png', 'sport_fit_tracker_tab@2x.png'],
  },
  mob: {
    png: ['sport_fit_tracker_mob@1x.png', 'sport_fit_tracker_mob@2x.png'],
  },
};

export const imageName = imagePaths['desk'].png[0]
  .split('_d')[0]
  .replace(/_/g, ' ');

 export const basePath = '/healthy_hub/src/images/Illustrations/Welcome';

 export const welcomeSrcDesk = generateSources(basePath, 'desk', imagePaths);
 
 export const welcomeSrcTab = generateSources(basePath, 'tab', imagePaths);
 
 export const welcomeSrcMob = generateSources(basePath, 'mob', imagePaths);
 
 export const welcomeImgSrc = `${basePath}/${imagePaths['desk'].png[0]}`;
 
 export const welcomeImgName = imageName;