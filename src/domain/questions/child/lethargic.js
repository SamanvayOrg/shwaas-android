import questionTypes from '../../questionTypes/questionTypes';
import {alwaysShow, redIfTrue} from '../utils';

const key = 'lethargic';

const output = form => redIfTrue(form[key]);

export default {
  key,
  label: key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output,
  optionImages: {
    yes: require('../../../assets/child/lethargic.jpg'),
  },
  commonImage: require('../../../assets/child/lethargic.jpg'),
};
