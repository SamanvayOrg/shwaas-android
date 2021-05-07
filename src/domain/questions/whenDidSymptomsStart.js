import questionTypes from '../questionTypes';
import {
  alwaysGreen,
  alwaysShow,
  isDefined,
  objectify,
  outputWeight,
} from './utils';

const key = 'whenDidSymptomsStart';

const output = form => {
  if (form[key] >= 15) {
    return objectify(outputWeight.black, 'needBloodTestsAndOthers');
  }
  return objectify(outputWeight.green);
};

export default {
  key,
  type: questionTypes.numeric,
  show: alwaysShow,
  output: output,
};
