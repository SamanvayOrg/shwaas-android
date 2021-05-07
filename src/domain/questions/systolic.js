import questionTypes from '../questionTypes';
import {objectify, outputWeight} from './utils';

const key = 'systolic';

const show = form => form.accessToBPMachine === true;

const output = form => {
  if (form[key] > 100) {
    return objectify(outputWeight.green);
  }
  if (form[key] > 90) {
    return objectify(outputWeight.yellow);
  }
  return objectify(outputWeight.red);
};

export default {
  key,
  type: questionTypes.numeric,
  show,
  output,
};
