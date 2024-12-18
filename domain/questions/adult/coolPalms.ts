import questionTypes from '../../questionTypes/QuestionType';
import {objectify, outputWeight} from '../utils';
import {Question} from "@/domain/Question";

const key = 'coolPalms';

const show = form => form.accessToBPMachine === false;

const output = form => {
  if (form[key] === 'yes') return objectify(outputWeight.red, 'lowBPRed');
  if (form[key] === 'no') return objectify(outputWeight.green);
  if (form[key] === 'unsure') return objectify(outputWeight.yellow);
};

export default <Question>{
  key,
  label: key,
  type: questionTypes.singleChoice,
  options: ['yes', 'no', 'unsure'],
  show,
  output,
};
