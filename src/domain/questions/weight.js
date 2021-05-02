import questionTypes from '../questionTypes';
import {alwaysGreen} from './utils';

const key = 'weight';

const show = form => {
  return form.knowHeightOrWeight;
};

export default {
  key,
  type: questionTypes.numeric,
  unit: 'kg',
  show,
  output: alwaysGreen,
};
