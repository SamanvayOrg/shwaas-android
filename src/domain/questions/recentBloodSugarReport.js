import questionTypes from '../questionTypes';
import {alwaysGreen} from './utils';

const key = 'recentBloodSugarReport';

const show = ({comorbidities = []}) => comorbidities.includes('diabetes');

export default {
  key,
  type: questionTypes.boolean,
  show,
  output: alwaysGreen,
};
