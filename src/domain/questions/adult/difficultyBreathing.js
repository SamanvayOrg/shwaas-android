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
  optionImages: {
    yes: require('../../../assets/breathless.jpg'),
  },
  commonImage: require('../../../assets/breathless.jpg'),
};
