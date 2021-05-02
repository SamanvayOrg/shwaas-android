import questionTypes from '../questionTypes';
import {outputWeight} from './utils';

const key = 'oxygenSaturation';

const show = form => form.accessToPulseOximeter === true;

const output = form => {
  if (form[key] < 93) return outputWeight.red;
  if (form[key] < 95) return outputWeight.yellow;
  return outputWeight.green;
};

export default {
  key,
  type: questionTypes.numeric,
  unit: 'percentage',
  show,
  output,
};
