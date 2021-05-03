import questionTypes from '../questionTypes';
import {alwaysShow, outputWeight} from './utils';

const key = 'age';

const output = form =>
  form[key] < 12 ? outputWeight.black : outputWeight.green;

export default {
  key,
  type: questionTypes.numeric,
  unit: 'years',
  show: alwaysShow,
  output,
};
