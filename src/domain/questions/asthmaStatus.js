import questionTypes from '../questionTypes';
import {outputWeight} from './utils';

const key = 'asthmaStatus';

const show = ({comorbidities = []}) => {
  comorbidities.includes('asthma') || comorbidities.includes('lungDisease');
};

const output = form =>
  form[key] === 'symptomsPresent' ? outputWeight.red : outputWeight.yellow;

export default {
  key,
  type: questionTypes.singleChoice,
  options: ['symptomsPresent', 'symptomsAbsent', 'notSure'],
  show,
  output,
};
