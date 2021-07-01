import questionTypes from '../../questionTypes/questionTypes';
import {alwaysShow, objectify, outputWeight} from '../utils';

const key = 'anyOfTheseSymptoms';

const output = form =>
  form[key] === true
    ? objectify(outputWeight.yellow)
    : objectify(outputWeight.green);

export default {
  key,
  label: key,
  type: questionTypes.multichoice,
  options: [
    'chestIndrawing',
    'grunting',
    'nasalFlaring',
    'stridor',
    'wheeze',
    'apnoea',
  ],
  show: alwaysShow,
  output,
};
