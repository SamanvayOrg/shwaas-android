import questionTypes from '../questionTypes';
import {objectify, outputWeight} from './utils';

const key = 'diastolic';

const show = form => form.accessToBPMachine === true;

const output = form => {
  if (form[key] > 80) {
    return objectify(outputWeight.green);
  }
  if (form[key] > 60) {
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
