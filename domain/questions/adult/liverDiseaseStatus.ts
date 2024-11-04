import questionTypes from '../../questionTypes/QuestionType';
import {objectify, outputWeight} from '../utils';
import {Question} from "@/domain/Question";

const key = 'liverDiseaseStatus';

const show = ({comorbidities = []}) => comorbidities.includes('liverDisease');

const output = form =>
  form[key] === 'symptomsPresent'
    ? objectify(outputWeight.red)
    : objectify(outputWeight.yellow);

export default <Question>{
  key,
  label: key,
  helpText: 'liverDiseaseSubtext',
  type: questionTypes.singleChoice,
  options: ['symptomsPresent', 'symptomsAbsent', 'dontKnow'],
  show,
  output,
};
