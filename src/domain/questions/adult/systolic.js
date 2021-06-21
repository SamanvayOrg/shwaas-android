import questionTypes from '../../questionTypes/questionTypes';
import {objectify, outputWeight} from '../utils';

const key = 'systolic';

const show = form => form.accessToBPMachine === true;

const output = form => {
  if (form[key] > 179) {
    return objectify(outputWeight.red, 'highSystolicRed');
  }
  if (form[key] > 160) {
    return objectify(outputWeight.yellow, 'highSystolicYellow');
  }
  if (form[key] > 99) {
    return objectify(outputWeight.green);
  }
  if (form[key] > 90) {
    return objectify(outputWeight.yellow);
  }
  return objectify(outputWeight.red, 'lowSystolicRed');
};

export default {
  key,
  label: key,
  unit: 'mmHg',
  type: questionTypes.numeric,
  show,
  output,
  commonImage: require('../../../assets/systolic.jpg'),
};
