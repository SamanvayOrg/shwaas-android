import questionTypes from '../../questionTypes/QuestionType';
import {alwaysGreen, alwaysShow} from '../utils';
import {Question} from "@/domain/Question";

const key = 'sex';

export default <Question>{
  key,
  label: key,
  type: questionTypes.singleChoice,
  options: ['male', 'female'],
  show: alwaysShow,
  output: alwaysGreen,
};
