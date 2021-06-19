import questionTypes from '../../questionTypes/questionTypes';
import {alwaysShow, objectify, outputWeight} from '../utils';

const key = 'breathCount';

const output = form => {
  if (form[key] < 13) return objectify(outputWeight.red);
  if (form[key] < 24) return objectify(outputWeight.green);
  if (form[key] < 29)
    return objectify(outputWeight.yellow, 'breathCountYellow');
  if (form[key] >= 29) return objectify(outputWeight.red, 'breathCountRed');
};

export default {
  key,
  label: key,
  type: questionTypes.breathCount,
  unit: 'bpm',
  show: alwaysShow,
  output,
};
