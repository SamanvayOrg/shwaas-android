import questionTypes from '../../questionTypes/QuestionType';
import {alwaysGreen} from '../utils';
import sex from './sex';
import {Question} from "@/domain/Question";

const key = 'accessToWeighingMachine';
const show = form => form[sex.key] !== undefined;

export default <Question>{
  key,
  label: key,
  type: questionTypes.boolean,
  show,
  output: alwaysGreen,
};
