import questionTypes from '../../questionTypes/QuestionType';
import {alwaysGreen, alwaysShow} from '../utils';
import {Question} from "@/domain/Question";

const key = 'coughInPast14Days';

export default <Question> {
  key,
  label: key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output: alwaysGreen,
  optionImages: {
    yes: require('../../../assets/images/cough.jpg'),
  },
  commonImage: require('../../../assets/images/cough.jpg'),
};
