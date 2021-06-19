import {getUnit} from './questionType';

const key = 'numeric';
const getAnswerString = (question, value) => `${value} ${getUnit(question)}`;

export default {
  key,
  getAnswerString
}
