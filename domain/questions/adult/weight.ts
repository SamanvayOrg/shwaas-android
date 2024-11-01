import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen} from '../utils';

const key = 'weight';

const show = form => {
  return form.knowHeightOrWeight;
};

export default {
  key,
  label: key,
  type: questionTypes.numeric,
  unit: 'kg',
  show,
  output: alwaysGreen,
};
