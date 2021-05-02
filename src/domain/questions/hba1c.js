import questionTypes from '../questionTypes';
import {outputWeight} from './utils';

const key = 'hba1c';

const show = ({comorbidities = [], ...form}) =>
  comorbidities.includes('diabetes') && form.recentBloodSugarReport;

const output = form =>
  form[key] === 'lessThan7' ? outputWeight.green : outputWeight.yellow;

export default {
  key,
  type: questionTypes.singleChoice,
  options: ['lessThan7', 'moreThan7', 'dontKnow'],
  show,
  output,
};
