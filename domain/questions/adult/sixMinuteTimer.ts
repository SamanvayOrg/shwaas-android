import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen, alwaysShow} from '../utils';
import {Question} from "@/domain/Question";

const key = 'sixMinuteTimer';

const show = form => form.accessToPulseOximeter === true;

export default <Question>{
  key,
  label: key,
  helpText: 'takeOximeterReadingAfterThis',
  type: questionTypes.timer,
  show,
  output: alwaysGreen,
};
