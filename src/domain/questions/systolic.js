import questionTypes from '../questionTypes';
import {outputWeight} from './utils';

const key = 'systolic';

const show = form => form.accessToBPMachine === true;

const output = form => {
  if (form[key] > 100) {
    return outputWeight.green;
  }
  if (form[key] > 90) {
    return outputWeight.yellow;
  }
  return outputWeight.red;
};

export default {
  key,
  type: questionTypes.numeric,
  show,
  output,
};
