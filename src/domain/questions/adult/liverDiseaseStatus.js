import questionTypes from '../../questionTypes/questionTypes';
import {objectify, outputWeight} from '../utils';

const key = 'liverDiseaseStatus';

const show = ({comorbidities = []}) => comorbidities.includes('liverDisease');

const output = form =>
  form[key] === 'symptomsPresent'
    ? objectify(outputWeight.red)
    : objectify(outputWeight.yellow);

export default {
  key,
  label: key,
  helpText: 'liverDiseaseSubtext',
  type: questionTypes.singleChoice,
  options: ['symptomsPresent', 'symptomsAbsent', 'dontKnow'],
  show,
  output,
};
