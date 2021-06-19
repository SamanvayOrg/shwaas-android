import questionTypes from '../../questionTypes/questionTypes';
import {alwaysShow, objectify, outputWeight} from '../utils';

const key = 'whenDidSymptomsStart';

const output = form => {
  if (form[key] >= 21) {
    return objectify(outputWeight.black, 'needBloodTestsAndOthers');
  }
  return objectify(outputWeight.green);
};

export default {
  key,
  label: key,
  unit: 'days',
  type: questionTypes.numeric,
  show: alwaysShow,
  output: output,
};
