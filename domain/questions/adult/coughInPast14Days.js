import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen, alwaysShow} from '../utils';

const key = 'coughInPast14Days';

export default {
  key,
  label: key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output: alwaysGreen,
  optionImages: {
    yes: require('../../../assets/images/cough.jpg'),
  },
  commonImage: require('../../../assets/images/cough.jpg'),
};
