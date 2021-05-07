import questionTypes from '../questionTypes';
import {alwaysShow, objectify, outputWeight} from './utils';

const key = 'coughInPast7Days';

const output = form => {
  return form[key] === false && form.feverInPast7Days === false
    ? objectify(outputWeight.black)
    : objectify(outputWeight.green);
};

export default {
  key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output,
};
