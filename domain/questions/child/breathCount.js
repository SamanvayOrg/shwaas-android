import questionTypes from '../../questionTypes/questionTypes';
import {alwaysShow, objectify, outputWeight} from '../utils';
import age from '../common/age';

const key = 'breathCount';

const output = form => {
  const ageInMonths = form[age.key];
  const value = form[key];
  if (ageInMonths <= 2) {
    return outputFor(value, 30, 60);
  }
  if (ageInMonths <= 12) {
    return outputFor(value, 30, 50);
  }
  if (ageInMonths <= 60) {
    return outputFor(value, 20, 40);
  }
  return outputFor(value, 18, 30);
};

const outputFor = (value, lowerLimit, upperLimit) => {
  if (value < lowerLimit) return objectify(outputWeight.red);
  if (value < upperLimit) return objectify(outputWeight.green);
  if (value >= upperLimit) return objectify(outputWeight.red, 'breathCountRed');
};

export default {
  key,
  label: key,
  type: questionTypes.breathCount,
  unit: 'bpm',
  show: alwaysShow,
  output,
};
