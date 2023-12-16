export const imagePaths = {
  desk: {
    png: ['interactive_learning _desk@1x.png', 'interactive_learning _desk@2x.png'],
  },
  tab: {
    png: ['interactive_learning _tab@1x.png', 'interactive_learning  _tab@2x.png'],
  },
  mob: {
    png: ['interactive_learning _mob@1x.png', 'interactive_learning  _mob@2x.png'],
  },
};

export const imageName = imagePaths['desk'].png[0]
  .split('_d')[0]
  .replace(/_/g, ' ');

 export const basePath = '/healthy_hub/src/images/Illustrations/ProfileSetting';
