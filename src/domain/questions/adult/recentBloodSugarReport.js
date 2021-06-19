import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen} from '../utils';

const key = 'recentBloodSugarReport';

const show = ({comorbidities = []}) => comorbidities.includes('diabetes');

export default {
  key,
  label: key,
  type: questionTypes.boolean,
  show,
  output: alwaysGreen,
};
