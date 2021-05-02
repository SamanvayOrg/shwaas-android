import questionTypes from '../questionTypes';
import {alwaysShow, outputWeight} from './utils';

const key = 'feverInPast7Days';

const output = form => {
  if (form[key] === false && form.coughInPast7Days === false) {
    return outputWeight.black;
  }
  return outputWeight.green;
};

export default {
  key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output,
};