import Screens from '../Screens';
import questionTypes from '../questionTypes';

const key = 'age';

const nextSteps = form => {
  if (form[key] < 12) {
    return {
      screen: Screens.recommendations,
      params: {
        message: 'toolUnlikelyToHelpPerson',
      },
    };
  }

  return Screens.difficultyBreathing;
};

export default {
  key,
  type: questionTypes.numeric,
  nextSteps,
};
