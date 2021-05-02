import questionTypes from '../questionTypes';

const key = 'systolic';

const show = form => form.accessToBPMachine === true;

export default {
  key,
  type: questionTypes.numeric,
  show,
};
