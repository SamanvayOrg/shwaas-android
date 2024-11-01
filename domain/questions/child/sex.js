import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen, alwaysShow} from '../utils';

const key = 'sex';

export default {
  key,
  label: key,
  type: questionTypes.singleChoice,
  options: ['male', 'female'],
  show: alwaysShow,
  output: alwaysGreen,
};
