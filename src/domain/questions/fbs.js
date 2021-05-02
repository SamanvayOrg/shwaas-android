import questionTypes from '../questionTypes';
import {outputWeight} from './utils';

const key = 'fbs';

const show = ({comorbidities = [], ...form}) =>
  comorbidities.includes('diabetes') && form.recentBloodSugarReport;

const output = form =>
  form[key] === 'lessThan126' ? outputWeight.green : outputWeight.yellow;

export default {
  key,
  type: questionTypes.singleChoice,
  options: ['lessThan126', 'moreThan126', 'dontKnow'],
  show,
  output,
};
