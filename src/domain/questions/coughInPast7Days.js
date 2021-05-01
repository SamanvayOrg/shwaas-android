import Screens from '../Screens';
import questionTypes from '../questionTypes';

const nextSteps = () => Screens.feverInPast7Days;

export default {
  key: 'coughInPast7Days',
  type: questionTypes.boolean,
  nextSteps,
};
