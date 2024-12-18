import questionTypes from '../../questionTypes/QuestionType';
import {alwaysShow, redIfTrue} from '../utils';
import {Question} from "@/domain/Question";

const key = 'stoppedFeeding';

const output = form => redIfTrue(form[key]);

export default <Question>{
  key,
  label: key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output,
  optionImages: {
    yes: require('../../../assets/images/child/stoppedFeeding.jpg'),
  },
  commonImage: require('../../../assets/images/child/stoppedFeeding.jpg'),
};
