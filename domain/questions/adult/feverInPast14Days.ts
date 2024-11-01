import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen} from '../utils';

const key = 'feverInPast14Days';

const show = form => form.coughInPast14Days !== true;

export default {
  key,
  label: key,
  type: questionTypes.boolean,
  show,
  output: alwaysGreen,
  optionImages: {
    yes: require('../../../assets/images/fever.jpg'),
  },
  commonImage: require('../../../assets/images/fever.jpg'),
};
