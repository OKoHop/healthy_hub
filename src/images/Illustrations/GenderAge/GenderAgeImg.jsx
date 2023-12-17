export const imagePaths = {
  desk: {
    png: ['gender_and_age_desk@1x.png', 'gender_and_age_desk@2x.png'],
  },
  tab: {
    png: ['gender_and_age_tab@1x.png', 'gender_and_age_tab@2x.png'],
  },
  mob: {
    png: ['gender_and_age_mob@1x.png', 'gender_and_age_mob@2x.png'],
  },
};

export const imageName = imagePaths['desk'].png[0]
  .split('_d')[0]
  .replace(/_/g, ' ');

 export const basePath = '/healthy_hub/src/images/Illustrations/GenderAge';
