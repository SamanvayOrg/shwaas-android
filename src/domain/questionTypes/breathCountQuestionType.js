import {getUnit} from './questionType';

const key = 'breathCount';
const getAnswerString = (question, value) => `${value} ${getUnit(question)}`;

export default {
  key,
  getAnswerString
}
