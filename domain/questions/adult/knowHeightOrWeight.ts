import questionTypes from '../../questionTypes/QuestionType';
import {alwaysGreen, alwaysShow} from '../utils';
import {Question} from "@/domain/Question";

const key = 'knowHeightOrWeight';

export default <Question>{
  key,
  label: key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output: alwaysGreen,
};
