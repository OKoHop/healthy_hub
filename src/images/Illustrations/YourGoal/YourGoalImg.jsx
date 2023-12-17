import { generateSources } from '../../../components/ResponsiveImg/ResponsiveImg';
export const imagePaths = {
  desk: {
    png: ['summer_hiking_desk@1x.png', 'summer_hiking_desk@2x.png'],
  },
  tab: {
    png: ['summer_hiking_tab@1x.png', 'summer_hiking_tab@2x.png'],
  },
  mob: {
    png: ['summer_hiking_mob@1x.png', 'summer_hiking_mob@2x.png'],
  },
};

export const imageName = imagePaths['desk'].png[0]
  .split('_d')[0]
  .replace(/_/g, ' ');

export const basePath = '/healthy_hub/src/images/Illustrations/YourGoal';

export const goalSrcDesk = generateSources(basePath, 'desk', imagePaths);

export const goalSrcTab = generateSources(basePath, 'tab', imagePaths);

export const goalSrcMob = generateSources(basePath, 'mob', imagePaths);

export const goalImgSrc = `${basePath}/${imagePaths['desk'].png[0]}`;

export const goalImageName = imageName;
