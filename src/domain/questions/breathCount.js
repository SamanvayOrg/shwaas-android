import questionTypes from '../questionTypes';
import {alwaysShow, outputWeight} from './utils';

const key = 'breathCount';

const output = form => {
  if (form[key] < 12) return outputWeight.red;
  if (form[key] < 20) return outputWeight.green;
  if (form[key] < 24) return outputWeight.yellow;
  if (form[key] >= 24) return outputWeight.red;
};

export default {
  key,
  type: questionTypes.breathCount,
  unit: 'bpm',
  show: alwaysShow,
  output,
};
