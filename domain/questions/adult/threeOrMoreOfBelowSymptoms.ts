import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen, objectify, outputWeight} from '../utils';

const key = 'threeOrMoreOfBelowSymptoms';

const show = form =>
  form.coughInPast14Days === false &&
  form.feverInPast14Days === false &&
  form.lossOfTasteOrSmellInPast14Days === false;

const output = form => {
  return form[key] === false
    ? objectify(outputWeight.black, 'threeOrMoreOfBelowSymptomsBlack')
    : objectify(outputWeight.green);
};

export default {
  key,
  label: key,
  helpText: 'threeOrMoreOfBelowSymptomsSubtext',
  type: questionTypes.boolean,
  show: show,
  output,
};
