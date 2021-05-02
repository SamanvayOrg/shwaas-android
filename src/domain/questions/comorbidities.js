import questionTypes from '../questionTypes';
import {alwaysShow, outputWeight} from './utils';

const key = 'comorbidities';

const output = form => {
  const values = form[key] || [];
  if (values.find(value => value === 'kidneyDisease')) return outputWeight.red;
  return outputWeight.green;
};

export default {
  key,
  type: questionTypes.multichoice,
  options: [
    'diabetes',
    'hypertension',
    'heartDisease',
    'asthma',
    'lungDisease',
    'sickleCellDisease',
    'liverDisease',
    'kidneyDisease',
    'pregnancy',
    'obesity',
    'anemia',
    'hiv',
    'cancer',
  ],
  show: alwaysShow,
  output,
};
