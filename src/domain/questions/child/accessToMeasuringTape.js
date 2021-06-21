import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen} from '../utils';
import age from '../common/age';

const key = 'accessToMeasuringTape';
const show = form => form[age.key] >= 6 && form[age.key] <= 5 * 12;

export default {
  key,
  label: key,
  type: questionTypes.boolean,
  show,
  output: alwaysGreen,
};
