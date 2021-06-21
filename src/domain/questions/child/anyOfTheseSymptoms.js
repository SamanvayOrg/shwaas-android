import questionTypes from '../../questionTypes/questionTypes';
import {alwaysShow, objectify, outputWeight, redIfTrue} from '../utils';

const key = 'anyOfTheseSymptoms';

const output = form =>
  form[key] === true
    ? objectify(outputWeight.yellow)
    : objectify(outputWeight.green);

export default {
  key,
  label: key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output,
};
