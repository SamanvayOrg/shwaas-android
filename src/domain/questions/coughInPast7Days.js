import Screens from '../Screens';
import questionTypes from '../questionTypes';

const key = 'coughInPast7Days';

const nextSteps = () => ({
  screen: Screens.feverInPast7Days,
});

export default {
  key,
  type: questionTypes.boolean,
  nextSteps,
};
