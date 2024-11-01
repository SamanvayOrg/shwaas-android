import questionTypes from '../../questionTypes/questionTypes';
import {objectify, outputWeight} from '../utils';
import {Question} from "@/domain/Question";

const key = 'sickleDiseaseStatus';

const show = ({comorbidities = []}) =>
  comorbidities.includes('sickleCellDisease');

const output = form =>
  form[key] === 'symptomsPresent'
    ? objectify(outputWeight.red)
    : outputWeight.yellow;

export default <Question>{
  key,
  label: key,
  type: questionTypes.singleChoice,
  options: ['symptomsPresent', 'symptomsAbsent', 'notSure'],
  show,
  output,
};
