import questionTypes from '../questionTypes';
import {outputWeight} from './utils';

const key = 'heartDiseaseStatus';

const show = ({comorbidities = []}) => comorbidities.includes('heartDisease');

const output = form =>
  form[key] === 'symptomsPresent' ? outputWeight.red : outputWeight.yellow;

export default {
  key,
  type: questionTypes.singleChoice,
  options: ['symptomsPresent', 'symptomsAbsent', 'dontKnow'],
  show,
  output,
};
