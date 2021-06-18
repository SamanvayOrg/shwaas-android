import questionTypes from '../questionTypes';
import {alwaysShow, objectify, outputWeight} from './utils';

const key = 'age';

const output = form =>
  form[key] < 12
    ? objectify(outputWeight.black, 'comingSoon')
    : objectify(outputWeight.green);

export default {
  key,
  label: key,
  type: questionTypes.numeric,
  unit: 'years',
  show: alwaysShow,
  output,
};
