import questionTypes from '../../questionTypes/questionTypes';
import {alwaysShow, objectify, outputWeight} from '../utils';

const key = 'whenDidSymptomsStart';

const output = form =>
  form[key] >= 21
    ? objectify(outputWeight.black, 'needBloodTestsAndOthers')
    : objectify(outputWeight.green);

export default {
  key,
  label: key,
  unit: 'days',
  type: questionTypes.numeric,
  show: alwaysShow,
  output: output,
};
