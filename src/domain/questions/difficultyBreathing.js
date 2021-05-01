import Screens from '../Screens';
import messages from '../messages';
import questionTypes from '../questionTypes';

const key = 'difficultyBreathing';

const nextSteps = form => {
  if (form[key]) {
    return {
      screen: Screens.recommendations,
      params: {
        message: messages.admitToHospital,
      },
    };
  }

  return Screens.hardToRecogniseRelatives;
};

export default {
  key,
  type: questionTypes.boolean,
  nextSteps,
};
