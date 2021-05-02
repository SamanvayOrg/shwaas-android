import questionTypes from '../questionTypes';
import {alwaysGreen, alwaysShow} from './utils';

const key = 'accessToPulseOximeter';

export default {
  key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output: alwaysGreen,
};
