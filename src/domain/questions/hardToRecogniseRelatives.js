import Screens from '../Screens';
import questionTypes from '../questionTypes';

const key = 'hardToRecogniseRelatives';

const nextSteps = form => {
  return {
    screen: Screens.home,
  };
};

export default {
  key,
  type: questionTypes.boolean,
  nextSteps,
};
