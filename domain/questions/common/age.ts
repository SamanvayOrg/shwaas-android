import questionTypes from '../../questionTypes/QuestionType';
import {alwaysGreen, alwaysShow} from '../utils';
import {Question} from "@/domain/Question";

const key = 'age';

export default <Question>{
  key,
  label: key,
  type: questionTypes.age,
  show: alwaysShow,
  output: alwaysGreen,
};
