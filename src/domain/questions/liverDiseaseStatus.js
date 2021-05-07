import questionTypes from '../questionTypes';
import {objectify, outputWeight} from './utils';

const key = 'liverDiseaseStatus';

const show = ({comorbidities = []}) => comorbidities.includes('liverDisease');

const output = form =>
  form[key] === 'symptomsPresent'
    ? objectify(outputWeight.red)
    : objectify(outputWeight.yellow);

export default {
  key,
  helpText: 'liverDiseaseSubtext',
  type: questionTypes.singleChoice,
  options: ['symptomsPresent', 'symptomsAbsent', 'dontKnow'],
  show,
  output,
};
