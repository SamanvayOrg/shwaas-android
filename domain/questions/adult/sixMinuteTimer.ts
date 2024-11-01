import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen, alwaysShow} from '../utils';

const key = 'sixMinuteTimer';

const show = form => form.accessToPulseOximeter === true;

export default {
  key,
  label: key,
  helpText: 'takeOximeterReadingAfterThis',
  type: questionTypes.timer,
  show,
  output: alwaysGreen,
};
