import questionTypes from '../../questionTypes/questionTypes';
import {objectify, outputWeight} from '../utils';
import {Question} from "@/domain/Question";

const key = 'healthProviderDiabetesAdvice';

const show = ({comorbidities = [], ...form}) => {
  return (
    comorbidities.includes('diabetes') && form.recentBloodSugarReport === false
  );
};

const output = form =>
  form[key] === 'wellControlledDiabetes'
    ? objectify(outputWeight.green)
    : objectify(outputWeight.yellow);

export default <Question>{
  key,
  label: key,
  type: questionTypes.singleChoice,
  options: [
    'wellControlledDiabetes',
    'partiallyControlledDiabetes',
    'uncontrolledDiabetes',
  ],
  show,
  output,
};
