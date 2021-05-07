import questionTypes from '../questionTypes';
import {objectify, outputWeight} from './utils';

const key = 'systolic';

const show = form => form.accessToBPMachine === true;

const output = form => {
  if (form[key] > 150) {
    return objectify(outputWeight.yellow, 'highSystolicYellow');
  }
  if (form[key] > 100) {
    return objectify(outputWeight.green);
  }
  if (form[key] > 90) {
    return objectify(outputWeight.yellow);
  }
  return objectify(outputWeight.red, 'lowSystolicRed');
};

export default {
  key,
  type: questionTypes.numeric,
  show,
  output,
};
