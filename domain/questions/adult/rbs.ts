import questionTypes from '../../questionTypes/QuestionType';
import {objectify, outputWeight} from '../utils';
import {Question} from "@/domain/Question";

const key = 'rbs';

const show = ({comorbidities = [], ...form}) =>
  comorbidities.includes('diabetes') && form.recentBloodSugarReport;

const output = form =>
  form[key] === 'lessThan200'
    ? objectify(outputWeight.green)
    : outputWeight.yellow;

export default <Question>{
  key,
  label: key,
  type: questionTypes.singleChoice,
  options: ['lessThan200', 'moreThan200', 'dontKnow'],
  show,
  output,
};
