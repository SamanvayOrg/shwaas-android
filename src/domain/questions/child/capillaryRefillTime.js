import questionTypes from '../../questionTypes/questionTypes';
import {alwaysShow, objectify, outputWeight} from '../utils';

const key = 'capillaryRefillTime';

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
  show: alwaysShow,
  output,
};
