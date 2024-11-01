import questionTypes from '../../questionTypes/questionTypes';
import {objectify, outputWeight} from '../utils';

const key = 'highRiskDelivery';

const show = ({comorbidities = []}) => comorbidities.includes('pregnancy');

const output = form =>
  form[key] === 'yes'
    ? objectify(outputWeight.red)
    : objectify(outputWeight.yellow);

export default {
  key,
  label: key,
  type: questionTypes.singleChoice,
  options: ['yes', 'no', 'unsure'],
  show,
  output,
};
