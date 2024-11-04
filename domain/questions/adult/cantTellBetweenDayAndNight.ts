import questionTypes from '../../questionTypes/QuestionType';
import {alwaysShow, redIfTrue} from '../utils';
import {Question} from "@/domain/Question";

const key = 'cantTellBetweenDayAndNight';

const output = form => redIfTrue(form[key]);

export default <Question>{
  key,
  label: key,
  helpText: 'directlyObserve',
  type: questionTypes.boolean,
  show: alwaysShow,
  output,
};
