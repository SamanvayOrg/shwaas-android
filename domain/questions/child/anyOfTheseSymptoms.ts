import questionTypes from '../../questionTypes/QuestionType';
import {alwaysShow, objectify, outputWeight} from '../utils';
import {Question} from "@/domain/Question";

const key = 'anyOfTheseSymptoms';

const output = form =>
  form[key] === true
    ? objectify(outputWeight.yellow)
    : objectify(outputWeight.green);

export default <Question>{
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
    chestIndrawing: require('../../../assets/images/child/chestIndrawing.jpg'),
    wheeze: require('../../../assets/images/child/wheeze.jpg'),
    apnoea: require('../../../assets/images/child/apnoea.jpg'),
  },
  show: alwaysShow,
  output,
};
