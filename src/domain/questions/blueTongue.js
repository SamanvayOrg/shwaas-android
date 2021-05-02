import questionTypes from '../questionTypes';
import {redIfTrue} from './utils';

const key = 'blueTongue';

const show = form => form.accessToPulseOximeter === false;
const output = form => redIfTrue(form[key]);

export default {
  key,
  type: questionTypes.boolean,
  show,
  output,
};
