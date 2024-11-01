import questionTypes from '../../questionTypes/questionTypes';
import {alwaysShow, redIfTrue} from '../utils';

const key = 'seizures';

const output = form => redIfTrue(form[key]);

export default {
  key,
  label: key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output,
  optionImages: {
    yes: require('../../../assets/images/child/seizure.jpg'),
  },
  commonImage: require('../../../assets/images/child/seizure.jpg'),
};
