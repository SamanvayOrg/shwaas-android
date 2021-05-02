import questionTypes from '../questionTypes';
import {alwaysGreen} from './utils';

const key = 'height';

const show = form => form.knowHeightOrWeight === true;

export default {
  key,
  type: questionTypes.numeric,
  unit: 'cm',
  show,
  output: alwaysGreen,
};
