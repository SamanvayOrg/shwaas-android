import questionTypes from '../../questionTypes/QuestionType';
import {alwaysShow, objectify, outputWeight} from '../utils';
import {Question} from "@/domain/Question";

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

export default <Question>{
  key,
  label: key,
  type: questionTypes.singleChoice,
  options: ['lessThanTwoSeconds', 'twoToThreeSeconds', 'moreThanThreeSeconds'],
  show: alwaysShow,
  output,
};
