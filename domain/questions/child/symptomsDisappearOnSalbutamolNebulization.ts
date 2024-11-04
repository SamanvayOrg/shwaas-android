import questionTypes from '../../questionTypes/QuestionType';
import {objectify, outputWeight} from '../utils';
import anyOfTheseSymptoms from './anyOfTheseSymptoms';
import {Question} from "@/domain/Question";

const key = 'symptomsDisappearOnSalbutamolNebulization';
const show = form => form[anyOfTheseSymptoms.key]?.length > 0;
const output = form =>
  form[key] === true
    ? objectify(outputWeight.yellow)
    : objectify(outputWeight.red);

export default <Question>{
  key,
  label: key,
  type: questionTypes.boolean,
  show,
  output,
};
