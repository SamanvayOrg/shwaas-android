import questionTypes from '../questionTypes';
import {objectify, outputWeight} from './utils';

const key = 'oxygenSaturation';

const show = form => form.accessToPulseOximeter === true;

const output = form => {
  if (form[key] < 93) return objectify(outputWeight.red);
  if (form[key] < 95) return objectify(outputWeight.yellow);
  return objectify(outputWeight.green);
};

export default {
  key,
  type: questionTypes.numeric,
  unit: 'percentage',
  show,
  output,
};
