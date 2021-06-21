import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen, alwaysShow} from '../utils';

const key = 'assessUndernutrition';
//todo: this needs work

export default {
  key,
  label: key,
  type: questionTypes.boolean,
  show: form => false,
  output: alwaysGreen,
};
