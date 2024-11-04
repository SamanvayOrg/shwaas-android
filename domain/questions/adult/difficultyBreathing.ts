import questionTypes from '../../questionTypes/QuestionType';
import {alwaysShow, redIfTrue} from '../utils';
import {Question} from "@/domain/Question";

const key = 'difficultyBreathing';

const output = form => redIfTrue(form[key], 'difficultyBreathingSuggestion');

export default <Question>{
  key,
  label: key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output,
  optionImages: {
    yes: require('../../../assets/images/breathless.jpg'),
  },
  commonImage: require('../../../assets/images/breathless.jpg'),
};
