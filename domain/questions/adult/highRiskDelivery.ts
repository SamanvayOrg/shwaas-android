import questionTypes from '../../questionTypes/QuestionType';
import {objectify, outputWeight} from '../utils';
import {Question} from "@/domain/Question";

const key = 'highRiskDelivery';

const show = ({comorbidities = []}) => comorbidities.includes('pregnancy');

const output = form =>
  form[key] === 'yes'
    ? objectify(outputWeight.red)
    : objectify(outputWeight.yellow);

export default <Question>{
  key,
  label: key,
  type: questionTypes.singleChoice,
  options: ['yes', 'no', 'unsure'],
  show,
  output,
};
