import questionTypes from '../../questionTypes/questionTypes';
import {objectify, outputWeight} from '../utils';
import anyOfTheseSymptoms from './anyOfTheseSymptoms';

const key = 'accessToNebuliser';
const show = form => form[anyOfTheseSymptoms.key]?.length > 0;
const output = form =>
  form[key] === false
    ? objectify(outputWeight.red)
    : objectify(outputWeight.green);

export default {
  key,
  label: key,
  type: questionTypes.boolean,
  show,
  output,
};
