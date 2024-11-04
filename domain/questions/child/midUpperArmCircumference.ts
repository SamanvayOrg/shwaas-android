import questionTypes from '../../questionTypes/QuestionType';
import {objectify, outputWeight} from '../utils';
import accessToMeasuringTape from './accessToMeasuringTape';
import {Question} from "@/domain/Question";

const key = 'midUpperArmCircumference';
const show = form => form[accessToMeasuringTape.key] === true;

const output = form => {
  const midUpperArmCircumference = form[key];
  if (midUpperArmCircumference <= 11.5) {
    return objectify(outputWeight.red);
  }
  if (midUpperArmCircumference <= 12.5) {
    return objectify(outputWeight.yellow);
  }
  return objectify(outputWeight.green);
};

export default <Question>{
  key,
  label: key,
  type: questionTypes.numeric,
  unit: 'cm',
  show,
  output,
  commonImage: require('../../../assets/images/child/muac.jpg'),
};
