import questionTypes from '../../questionTypes/QuestionType';
import {alwaysGreen} from '../utils';
import {Question} from "@/domain/Question";

const key = 'sixMinuteTimer';

const show = form => form.accessToPulseOximeter;

export default <Question>{
  key,
  label: key,
  helpText: 'takeOximeterReadingAfterThis',
  type: questionTypes.timer,
  show,
  output: alwaysGreen,
};
