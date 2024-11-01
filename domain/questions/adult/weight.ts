import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen} from '../utils';
import {Question} from "@/domain/Question";

const key = 'weight';

const show = form => {
  return form.knowHeightOrWeight;
};

export default <Question>{
  key,
  label: key,
  type: questionTypes.numeric,
  unit: 'kg',
  show,
  output: alwaysGreen,
};
