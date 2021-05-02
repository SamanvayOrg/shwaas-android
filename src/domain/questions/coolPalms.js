import questionTypes from '../questionTypes';
import {alwaysGreen} from './utils';

const key = 'coolPalms';

const show = form => form.accessToBPMachine === false;

export default {
  key,
  type: questionTypes.boolean,
  show,
  output: alwaysGreen,
};
