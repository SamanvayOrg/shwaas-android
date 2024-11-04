import questionTypes from '../../questionTypes/QuestionType';
import {alwaysGreen} from '../utils';
import {Question} from "@/domain/Question";

const key = 'lossOfTasteOrSmellInPast14Days';

const show = form =>
  form.coughInPast14Days !== true && form.feverInPast14Days !== true;

export default <Question>{
  key,
  label: key,
  type: questionTypes.boolean,
  show: show,
  output: alwaysGreen,
};
