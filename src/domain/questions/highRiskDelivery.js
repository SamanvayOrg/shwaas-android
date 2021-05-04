import questionTypes from '../questionTypes';
import {outputWeight} from './utils';

const key = 'highRiskDelivery';

const show = form => form.pregnant === true;

const output = form =>
  form[key] === 'yes' ? outputWeight.red : outputWeight.yellow;

export default {
  key,
  type: questionTypes.singleChoice,
  options: ['yes', 'no', 'unsure'],
  show,
  output,
};
