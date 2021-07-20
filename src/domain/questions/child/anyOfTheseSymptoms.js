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
  optionImages: {
    chestIndrawing: require('../../../assets/child/chestIndrawing.jpg'),
    wheeze: require('../../../assets/child/wheeze.jpg'),
    apnoea: require('../../../assets/child/apnoea.jpg'),
  },
  show: alwaysShow,
  output,
};
