import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen, alwaysShow, objectify, outputWeight} from '../utils';

const key = 'feverInPast14Days';

export default {
  key,
  label: key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output: alwaysGreen,
};
