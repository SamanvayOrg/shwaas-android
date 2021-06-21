import questionTypes from '../../questionTypes/questionTypes';
import {alwaysShow, redIfTrue} from '../utils';

const key = 'difficultyBreathing';

const output = form => redIfTrue(form[key], 'difficultyBreathingSuggestion');

export default {
  key,
  label: key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output,
  commonImage: require('../../../assets/breathingDifficulty.png'),
};
