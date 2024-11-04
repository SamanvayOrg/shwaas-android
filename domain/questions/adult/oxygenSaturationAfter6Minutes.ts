import questionTypes from '../../questionTypes/QuestionType';
import {objectify, outputWeight} from '../utils';
import {Question} from "@/domain/Question";

const key = 'oxygenSaturationAfter6Minutes';

const show = form => form.accessToPulseOximeter === true;

const output = form => {
  if (form['oxygenSaturation'] - form[key] > 4)
    return objectify(outputWeight.red);
  return objectify(outputWeight.green);
};

export default <Question>{
  key,
  label: key,
  helpText: 'ensureYouDoThe6MinuteWalk',
  type: questionTypes.numeric,
  unit: 'percentage',
  show,
  output,
  commonImage: require('../../../assets/images/pulseOximeterReading.png'),
};
