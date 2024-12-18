import questionTypes from '../../questionTypes/QuestionType';
import {objectify, outputWeight} from '../utils';
import anyOfTheseSymptoms from './anyOfTheseSymptoms';
import {Question} from "@/domain/Question";

const key = 'accessToNebuliser';
const show = form => form[anyOfTheseSymptoms.key]?.length > 0;
const output = form =>
  form[key] === false
    ? objectify(outputWeight.red)
    : objectify(outputWeight.green);

export default <Question>{
  key,
  label: key,
  type: questionTypes.boolean,
  show,
  output,
};
