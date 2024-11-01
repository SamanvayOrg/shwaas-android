import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen, alwaysShow} from '../utils';

const key = 'accessToPulseOximeter';

export default {
  key,
  label: key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output: alwaysGreen,
  optionImages: {
    yes: require('../../../assets/images/pulseOximeter.png'),
  },
  commonImage: require('../../../assets/images/pulseOximeter.png'),
};
