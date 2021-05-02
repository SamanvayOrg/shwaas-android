import questionTypes from '../questionTypes';
import {outputWeight} from './utils';

const key = 'liverDiseaseStatus';

const show = ({comorbidities = []}) => comorbidities.includes('liverDisease');

const output = form =>
  form[key] === 'symptomsPresent' ? outputWeight.red : outputWeight.yellow;

export default {
  key,
  type: questionTypes.singleChoice,
  options: ['symptomsPresent', 'symptomsAbsent', 'dontKnow'],
  show,
  output,
};
