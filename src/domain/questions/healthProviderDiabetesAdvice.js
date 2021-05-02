import questionTypes from '../questionTypes';
import {outputWeight} from './utils';

const key = 'healthProviderDiabetesAdvice';

const show = ({comorbidities = []}) => {
  comorbidities.includes('diabetes');
};

const output = form =>
  form[key] === 'wellControlledDiabetes'
    ? outputWeight.green
    : outputWeight.yellow;

export default {
  key,
  type: questionTypes.singleChoice,
  options: [
    'wellControlledDiabetes',
    'partiallyControlledDiabetes',
    'uncontrolledDiabetes',
  ],
  show,
  output,
};
