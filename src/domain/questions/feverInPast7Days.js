import questionTypes from '../questionTypes';
import {alwaysShow, objectify, outputWeight} from './utils';

const key = 'feverInPast7Days';

const output = form => {
  if (form[key] === false && form.coughInPast7Days === false) {
    return outputWeight.black;
  }
  return objectify(outputWeight.green);
};

export default {
  key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output,
};
