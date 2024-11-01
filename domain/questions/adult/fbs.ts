import questionTypes from '../../questionTypes/questionTypes';
import {objectify, outputWeight} from '../utils';

const key = 'fbs';

const show = ({comorbidities = [], ...form}) =>
  comorbidities.includes('diabetes') && form.recentBloodSugarReport;

const output = form =>
  form[key] === 'lessThan126'
    ? objectify(outputWeight.green)
    : objectify(outputWeight.yellow);

export default {
  key,
  label: key,
  type: questionTypes.singleChoice,
  options: ['lessThan126', 'moreThan126', 'dontKnow'],
  show,
  output,
};
