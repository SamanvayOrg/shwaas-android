import questionTypes from '../questionTypes';
import {outputWeight} from './utils';
import messages from '../messages';

const key = 'diabetesStatus';

const show = ({comorbidities = [], ...form}) =>
  comorbidities.includes('diabetes') && form.recentBloodSugarReport;

const isControlled = ({fbs, pp2bs, rbs, hba1c}) =>
  (fbs === 'lessThan126' && pp2bs < 200 && rbs < 200 && hba1c < 7);

const output = form =>
  isControlled(form) ? outputWeight.green : outputWeight.yellow;


const value = form => {
  return isControlled(form)? messages.get('diabetesControlled'): messages.get('diabetesUncontrolled');
};

export default {
  key,
  type: questionTypes.information,
  show,
  output,
  value,
};
