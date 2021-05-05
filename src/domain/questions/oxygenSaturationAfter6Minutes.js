import questionTypes from '../questionTypes';
import {outputWeight} from './utils';

const key = 'oxygenSaturationAfter6Minutes';

const show = form => form.accessToPulseOximeter === true;

const output = form => {
  if (form['oxygenSaturation'] - form[key] > 4) return outputWeight.red;
  return outputWeight.green;
};

export default {
  key,
  helpText: 'ensureYouDoThe6MinuteWalk',
  type: questionTypes.numeric,
  unit: 'percentage',
  show,
  output,
};
