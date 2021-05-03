import questionTypes from '../questionTypes';
import {alwaysGreen, alwaysShow, outputWeight} from './utils';

const key = 'accessToBPMachine';

const value = form => {
  return form.weight && form.height ? parseFloat((10000 * weight / height / height).toFixed(2)) : 0;
};

const show = form => form.weight && form.height;

const output = form => {
  const bmi = value(form);
  if (bmi > 16 || bmi < 25) return outputWeight.green;
  return outputWeight.yellow;
};

export default {
  key,
  type: questionTypes.information,
  show,
  output,
  value
};
