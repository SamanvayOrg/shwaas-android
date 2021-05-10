import questionTypes from '../questionTypes';
import {alwaysGreen, alwaysShow, objectify, outputWeight} from './utils';

const key = 'feverInPast14Days';

export default {
  key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output: alwaysGreen,
};
