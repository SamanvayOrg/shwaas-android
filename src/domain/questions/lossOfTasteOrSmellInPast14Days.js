import questionTypes from '../questionTypes';
import {alwaysGreen, alwaysShow, objectify, outputWeight} from './utils';

const key = 'lossOfTasteOrSmellInPast14Days';

const show = form =>
  form.coughInPast14Days === false && form.feverInPast14Days === false;

export default {
  key,
  label: key,
  type: questionTypes.boolean,
  show: show,
  output: alwaysGreen,
};
