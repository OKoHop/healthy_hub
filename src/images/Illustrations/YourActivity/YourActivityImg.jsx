import { generateSources } from '../../../components/ResponsiveImg/ResponsiveImg';

export const imagePaths = {
  desk: {
    png: ['activity_desk@1x.png', 'activity_desk@2x.png'],
  },
  tab: {
    png: ['activity_tab@1x.png', 'activity_tab@2x.png'],
  },
  mob: {
    png: ['activity_mob@1x.png', 'activity_mob@2x.png'],
  },
};

export const imageName = imagePaths['desk'].png[0]
  .split('_d')[0]
  .replace(/_/g, ' ');

export const basePath = '/healthy_hub/src/images/Illustrations/YourActivity';

export const activitySrcDesk = generateSources(basePath, 'desk', imagePaths);

export const activitySrcTab = generateSources(basePath, 'tab', imagePaths);

export const activitySrcMob = generateSources(basePath, 'mob', imagePaths);

export const activityImgSrc = `${basePath}/${imagePaths['desk'].png[0]}`;

export const activityImageName = imageName;
