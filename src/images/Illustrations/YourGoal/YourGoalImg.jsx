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
