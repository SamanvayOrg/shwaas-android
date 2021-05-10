import questionTypes from '../questionTypes';
import {alwaysShow, objectify, outputWeight} from './utils';

const key = 'whenDidSymptomsStart';

const output = form => {
  if (form[key] >= 21) {
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
