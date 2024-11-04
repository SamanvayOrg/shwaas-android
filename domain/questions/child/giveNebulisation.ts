import questionTypes from '../../questionTypes/QuestionType';
import {alwaysGreen} from '../utils';
import accessToNebuliser from './accessToNebuliser';
import {Question} from "@/domain/Question";

const key = 'giveNebulisation';
const value = () => '';
const show = form => form[accessToNebuliser.key] === true;

export default <Question>{
  key,
  label: key,
  type: questionTypes.information,
  show,
  output: alwaysGreen,
  value,
};
