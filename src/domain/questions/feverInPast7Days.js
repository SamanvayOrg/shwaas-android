import Screens from '../Screens';
import questionTypes from '../questionTypes';
const key = 'coughInPast7Days';

const nextSteps = form => {
  if (!form[key] && !form.feverInPast7Days) {
    return {
      screen: Screens.recommendations,
      params: {
        message: 'toolUnlikelyToHelpPerson',
      },
    };
  }

  return {
    screen: Screens.age,
  };
};

export default {
  key,
  type: questionTypes.boolean,
  nextSteps,
};
