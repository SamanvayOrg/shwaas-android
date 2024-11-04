import questionTypes from '../../questionTypes/QuestionType';
import {alwaysShow, objectify, outputWeight} from '../utils';
import {Question} from "@/domain/Question";

const key = 'whenDidSymptomsStart';

const output = form =>
  form[key] >= 21
    ? objectify(outputWeight.black, 'needBloodTestsAndOthers')
    : objectify(outputWeight.green);

export default <Question>{
  key,
  label: key,
  unit: 'days',
  type: questionTypes.numeric,
  show: alwaysShow,
  output: output,
};
