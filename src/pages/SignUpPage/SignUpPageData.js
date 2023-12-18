import { generateSources } from '../../components/ResponsiveImg/ResponsiveImg';
import {
  parametersImageName,
  parametersImgSrc,
  parametersSrcDesk,
  parametersSrcMob,
  parametersSrcTab,
} from '../../images/Illustrations/BodyParameters/BodyParametersImg';
import {
  genderImageName,
  genderImgSrc,
  genderSrcDesk,
  genderSrcMob,
  genderSrcTab,
} from '../../images/Illustrations/GenderAge/GenderAgeImg';
import {
  basePath,
  imageName,
  imagePaths,
} from '../../images/Illustrations/Welcome/WelcomeImg';
import {
  activityImageName,
  activityImgSrc,
  activitySrcDesk,
  activitySrcMob,
  activitySrcTab,
} from '../../images/Illustrations/YourActivity/YourActivityImg';
import {
  goalImageName,
  goalImgSrc,
  goalSrcDesk,
  goalSrcMob,
  goalSrcTab,
} from '../../images/Illustrations/YourGoal/YourGoalImg';

const signUpPageData = {
  0: {
    media: {
      srcDesk: generateSources(basePath, 'desk', imagePaths),
      srcTab: generateSources(basePath, 'tab', imagePaths),
      srcMob: generateSources(basePath, 'mob', imagePaths),
      imgSrc: `${basePath}/${imagePaths['desk'].png[0]}`,
      alt: imageName,
    },
    info: {
      title: 'Sign up',
      text: 'You need to register to use the service',
    },
  },
  1: {
    media: {
      srcDesk: goalSrcDesk,
      srcTab: goalSrcTab,
      srcMob: goalSrcMob,
      imgSrc: goalImgSrc,
      alt: goalImageName,
    },
    info: {
      title: 'Your goal',
      text: 'Choose a goal so that we can help you effectively',
    },
  },
  2: {
    media: {
      srcDesk: genderSrcDesk,
      srcTab: genderSrcTab,
      srcMob: genderSrcMob,
      imgSrc: genderImgSrc,
      alt: genderImageName,
    },
    info: {
      title: 'Select gender, Age',
      text: 'Choose a goal so that we can help you effectively',
    },
  },
  3: {
    media: {
      srcDesk: parametersSrcDesk,
      srcTab: parametersSrcTab,
      srcMob: parametersSrcMob,
      imgSrc: parametersImgSrc,
      alt: parametersImageName,
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
