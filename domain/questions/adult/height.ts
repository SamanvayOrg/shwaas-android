import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen} from '../utils';

const key = 'height';

const show = form => form.knowHeightOrWeight === true;

export default {
  key,
  label: key,
  type: questionTypes.numeric,
  unit: 'cm',
  show,
  output: alwaysGreen,
};
