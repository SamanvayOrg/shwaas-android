import questionTypes from '../questionTypes';
import {alwaysShow, redIfTrue} from './utils';

const key = 'hardToRecogniseRelatives';
const output = form => redIfTrue(form[key]);

export default {
  key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output,
};
