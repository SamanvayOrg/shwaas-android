import {getUnit} from './questionType';

const key = 'timer';
const getAnswerString = (question, value) => `${value} ${getUnit(question)}`;

export default {
  key,
  getAnswerString
}
