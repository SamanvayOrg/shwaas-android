import questionTypes from '../questionTypes';
import {outputWeight} from './utils';

const key = 'passingLessUrine';

const show = form => form.accessToBPMachine === false;

const output = form => {
  if (form[key] === 'yes') return outputWeight.red;
  if (form[key] === 'no') return outputWeight.green;
  if (form[key] === 'unsure') return outputWeight.yellow;
};

export default {
  key,
  type: questionTypes.singleChoice,
  options: ['yes', 'no', 'unsure'],
  show,
  output,
};
