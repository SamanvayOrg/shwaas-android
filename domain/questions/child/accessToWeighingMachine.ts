import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen} from '../utils';
import sex from './sex';

const key = 'accessToWeighingMachine';
const show = form => form[sex.key] !== undefined;

export default {
  key,
  label: key,
  type: questionTypes.boolean,
  show,
  output: alwaysGreen,
};
