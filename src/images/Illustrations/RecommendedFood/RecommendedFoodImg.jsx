export const imagePaths = {
  desk: {
    png: ['ketogenic_diet_desk@1x.png', 'ketogenic_diet_desk@2x.png'],
  },
  tab: {
    png: ['ketogenic_diet_tab@1x.png', 'ketogenic_diet_tab@2x.png'],
  },
  mob: {
    png: ['ketogenic_diet_mob@1x.png', 'ketogenic_diet_mob@2x.png'],
  },
};

export const imageName = imagePaths['desk'].png[0]
  .split('_d')[0]
  .replace(/_/g, ' ');

 export const basePath = '/healthy_hub/src/images/Illustrations/RecommendedFood';
