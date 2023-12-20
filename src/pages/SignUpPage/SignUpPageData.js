import { generateSources } from '../../components/ResponsiveImg/ResponsiveImg';
import {
  bodyParamImgName,
  bodyParamImgSrc,
  bodyParamSrcDesk,
  bodyParamSrcMob,
  bodyParamSrcTab,
} from '../../images/Illustrations/BodyParameters/BodyParametersImg';
import {
  genderAgeImgName,
  genderAgeImgSrc,
  genderAgeSrcDesk,
  genderAgeSrcMob,
  genderAgeSrcTab,
} from '../../images/Illustrations/GenderAge/GenderAgeImg';

import {
  imageName,
  imagePaths
} from '../../images/Illustrations/Welcome/WelcomeImg';

import {
  activityImageName,
  activityImgSrc,
  activitySrcDesk,
  activitySrcMob,
  activitySrcTab,
} from '../../images/Illustrations/YourActivity/YourActivityImg';
import {
  yourGoalImgName,
  yourGoalImgSrc,
  yourGoalSrcDesk,
  yourGoalSrcMob,
  yourGoalSrcTab,
} from '../../images/Illustrations/YourGoal/YourGoalImg';

const signUpPageData = {
  0: {
    media: {
      srcDesk: generateSources(imagePaths,'desk'),
      srcTab: generateSources(imagePaths,'tab'),
      srcMob: generateSources(imagePaths, 'mob'),
      imgSrc: `${imagePaths['desk'].png[0]}`,
      alt: imageName,
    },
    info: {
      title: 'Sign up',
      text: 'You need to register to use the service',
    },
  },
  1: {
    media: {
      srcDesk: yourGoalSrcDesk,
      srcTab: yourGoalSrcTab,
      srcMob: yourGoalSrcMob,
      imgSrc: yourGoalImgSrc,
      alt: yourGoalImgName,
    },
    info: {
      title: 'Your goal',
      text: 'Choose a goal so that we can help you effectively',
    },
  },
  2: {
    media: {
      srcDesk: genderAgeSrcDesk,
      srcTab: genderAgeSrcTab,
      srcMob: genderAgeSrcMob,
      imgSrc: genderAgeImgSrc,
      alt: genderAgeImgName,
    },
    info: {
      title: 'Select gender, Age',
      text: 'Choose a goal so that we can help you effectively',
    },
  },
  3: {
    media: {
      srcDesk: bodyParamSrcDesk,
      srcTab: bodyParamSrcTab,
      srcMob: bodyParamSrcMob,
      imgSrc: bodyParamImgSrc,
      alt: bodyParamImgName,
    },
    info: {
      title: 'Body parameters',
      text: 'Enter your parameters for correct performance tracking',
    },
  },
  4: {
    media: {
      srcDesk: activitySrcDesk,
      srcTab: activitySrcTab,
      srcMob: activitySrcMob,
      imgSrc: activityImgSrc,
      alt: activityImageName,
    },
    info: {
      title: 'Your Activity',
      text: 'To correctly calculate calorie and water intake',
    },
  },
};

export default signUpPageData;
