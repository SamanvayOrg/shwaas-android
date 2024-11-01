import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen} from '../utils';
import {Question} from "@/domain/Question";

const key = 'height';

const show = form => form.knowHeightOrWeight === true;

export default <Question>{
  key,
  label: key,
  type: questionTypes.numeric,
  unit: 'cm',
  show,
  output: alwaysGreen,
};
