import questionTypes from '../../questionTypes/questionTypes';
import {objectify, outputWeight} from '../utils';

const key = 'sickleDiseaseStatus';

const show = ({comorbidities = []}) =>
  comorbidities.includes('sickleCellDisease');

const output = form =>
  form[key] === 'symptomsPresent'
    ? objectify(outputWeight.red)
    : outputWeight.yellow;

export default {
  key,
  label: key,
  type: questionTypes.singleChoice,
  options: ['symptomsPresent', 'symptomsAbsent', 'notSure'],
  show,
  output,
};
