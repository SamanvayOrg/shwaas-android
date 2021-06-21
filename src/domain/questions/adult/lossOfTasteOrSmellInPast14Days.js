import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen} from '../utils';

const key = 'lossOfTasteOrSmellInPast14Days';

const show = form =>
  form.coughInPast14Days !== true && form.feverInPast14Days !== true;

export default {
  key,
  label: key,
  type: questionTypes.boolean,
  show: show,
  output: alwaysGreen,
};
