import questionTypes from '../../questionTypes/QuestionType';
import {objectify, outputWeight} from '../utils';
import {Question} from "@/domain/Question";

const key = 'oxygenSaturation';

const show = form => form.accessToPulseOximeter === true;

const output = form => {
  if (form[key] < 93) return objectify(outputWeight.red);
  if (form[key] < 95) return objectify(outputWeight.yellow);
  return objectify(outputWeight.green);
};

export default <Question>{
  key,
  label: key,
  type: questionTypes.numeric,
  unit: 'percentage',
  show,
  output,
  commonImage: require('../../../assets/images/pulseOximeterReading.png'),
};
