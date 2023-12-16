export const imagePaths = {
  desk: {
    png: ['body_parameters_desk@1x.png', 'body_parameters_desk@2x.png'],
  },
  tab: {
    png: ['body_parameters_tab@1x.png', 'body_parameters_tab@2x.png'],
  },
  mob: {
    png: ['body_parameters_mob@1x.png', 'body_parameters_mob@2x.png'],
  },
};

export const imageName = imagePaths['desk'].png[0]
  .split('_d')[0]
  .replace(/_/g, ' ');

 export const basePath = '/healthy_hub/src/images/Illustrations/BodyParameters';
