import questionTypes from '../questionTypes';
import {alwaysShow, objectify, outputWeight} from './utils';

const key = 'breathCount';

const output = form => {
  if (form[key] < 12) return objectify(outputWeight.red);
  if (form[key] < 20) return objectify(outputWeight.green);
  if (form[key] < 24) return objectify(outputWeight.yellow);
  if (form[key] >= 24) return objectify(outputWeight.red);
};

export default {
  key,
  type: questionTypes.breathCount,
  unit: 'bpm',
  show: alwaysShow,
  output,
};
