import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen, alwaysShow} from '../utils';

const key = 'age';

export default {
  key,
  label: key,
  type: questionTypes.age,
  show: alwaysShow,
  output: alwaysGreen,
};
