import questionTypes from '../questionTypes';
import {outputWeight} from './utils';

const key = 'diastolic';

const show = form => form.accessToBPMachine === true;

const output = form => {
  if (form[key] > 80) {
    return outputWeight.green;
  }
  if (form[key] > 60) {
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
