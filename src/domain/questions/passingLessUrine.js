import questionTypes from '../questionTypes';
import {objectify, outputWeight} from './utils';

const key = 'passingLessUrine';

const show = form => form.accessToBPMachine === false;

const output = form => {
  if (form[key] === 'yes') return objectify(outputWeight.red);
  if (form[key] === 'no') return objectify(outputWeight.green);
  if (form[key] === 'unsure') return objectify(outputWeight.yellow);
};

export default {
  key,
  type: questionTypes.singleChoice,
  options: ['yes', 'no', 'unsure'],
  show,
  output,
};
