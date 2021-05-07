import questionTypes from '../questionTypes';
import {objectify, outputWeight} from './utils';

const key = 'heartDiseaseStatus';

const show = ({comorbidities = []}) => comorbidities.includes('heartDisease');

const output = form =>
  form[key] === 'symptomsPresent' ? objectify(outputWeight.red) : objectify(outputWeight.yellow);

export default {
  key,
  type: questionTypes.singleChoice,
  options: ['symptomsPresent', 'symptomsAbsent', 'dontKnow'],
  show,
  output,
};
