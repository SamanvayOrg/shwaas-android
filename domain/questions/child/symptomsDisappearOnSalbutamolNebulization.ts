import questionTypes from '../../questionTypes/questionTypes';
import {objectify, outputWeight} from '../utils';
import anyOfTheseSymptoms from './anyOfTheseSymptoms';

const key = 'symptomsDisappearOnSalbutamolNebulization';
const show = form => form[anyOfTheseSymptoms.key]?.length > 0;
const output = form =>
  form[key] === true
    ? objectify(outputWeight.yellow)
    : objectify(outputWeight.red);

export default {
  key,
  label: key,
  type: questionTypes.boolean,
  show,
  output,
};
