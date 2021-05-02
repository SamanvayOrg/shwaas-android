import questionTypes from '../questionTypes';
import {outputWeight} from './utils';

const key = 'highRiskDelivery';

const show = form => form.pregnant === true;

const output = form =>
  form[key] === 'Yes' ? outputWeight.red : outputWeight.yellow;

export default {
  key,
  type: questionTypes.singleChoice,
  options: ['Yes', 'No', 'Unsure'],
  show,
  output,
};
