import questionTypes from '../../questionTypes/questionTypes';
import {objectify, outputWeight} from '../utils';

const key = 'asthmaStatus';

const show = ({comorbidities = []}) => {
  comorbidities.includes('asthma') || comorbidities.includes('lungDisease');
};

const output = form =>
  form[key] === 'symptomsPresent'
    ? objectify(outputWeight.red)
    : objectify(outputWeight.yellow);

export default {
  key,
  label: key,
  type: questionTypes.singleChoice,
  options: ['symptomsPresent', 'symptomsAbsent', 'notSure'],
  show,
  output,
};
