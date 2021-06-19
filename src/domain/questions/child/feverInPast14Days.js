import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen, alwaysShow} from '../utils';

const key = 'feverInPast14Days';

export default {
  key,
  label: 'childFeverInPast14Days',
  type: questionTypes.boolean,
  show: alwaysShow,
  output: alwaysGreen,
};
