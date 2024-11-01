import questionTypes from '../../questionTypes/questionTypes';
import {alwaysShow, redIfTrue} from '../utils';

const key = 'stoppedStandingWithoutSupport';

const output = form => redIfTrue(form[key]);

export default {
  key,
  label: key,
  helpText: 'directlyObserve',
  type: questionTypes.boolean,
  show: alwaysShow,
  output,
};
