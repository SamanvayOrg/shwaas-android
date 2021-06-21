import questionTypes from '../../questionTypes/questionTypes';
import {objectify, outputWeight} from '../utils';
import symptomsDisappearOnSalbutamolNebulization from './symptomsDisappearOnSalbutamolNebulization';

const key = 'capillaryRefillTime';
const show = form =>
  form[symptomsDisappearOnSalbutamolNebulization.key] === true;

const output = form => {
  switch (form[key]) {
    case 'lessThanTwoSeconds': {
      return objectify(outputWeight.green);
    }
    case 'twoToThreeSeconds': {
      return objectify(outputWeight.yellow);
    }
    case 'moreThanThreeSeconds': {
      return objectify(outputWeight.red);
    }
  }
};

export default {
  key,
  label: key,
  type: questionTypes.singleChoice,
  options: ['lessThanTwoSeconds', 'twoToThreeSeconds', 'moreThanThreeSeconds'],
  show,
  output,
};
