import questionTypes from '../../questionTypes/questionTypes';
import {objectify, outputWeight} from '../utils';
import {Question} from "@/domain/Question";

const key = 'pp2bs';

const show = ({comorbidities = [], ...form}) =>
  comorbidities.includes('diabetes') && form.recentBloodSugarReport;

const output = form =>
  form[key] === 'lessThan200'
    ? objectify(outputWeight.green)
    : objectify(outputWeight.yellow);

export default <Question>{
  key,
  label: key,
  type: questionTypes.singleChoice,
  options: ['lessThan200', 'moreThan200', 'dontKnow'],
  show,
  output,
};
