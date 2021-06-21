import questionTypes from '../../questionTypes/questionTypes';
import {objectify, outputWeight} from '../utils';

const key = 'oxygenSaturationAfter6Minutes';

const show = form => form.accessToPulseOximeter === true;

const output = form => {
  if (form['oxygenSaturation'] - form[key] > 4)
    return objectify(outputWeight.red);
  return objectify(outputWeight.green);
};

export default {
  key,
  label: key,
  helpText: 'ensureYouDoThe6MinuteWalk',
  type: questionTypes.numeric,
  unit: 'percentage',
  show,
  output,
  commonImage: require('../../../assets/pulseOximeterReading.png'),
};
