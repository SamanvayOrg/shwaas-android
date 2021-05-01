import Screens from '../Screens';
import questionTypes from '../questionTypes';

const key = 'coughInPast7Days';

const nextSteps = () => Screens.feverInPast7Days;

export default {
  key,
  type: questionTypes.boolean,
  nextSteps,
};
