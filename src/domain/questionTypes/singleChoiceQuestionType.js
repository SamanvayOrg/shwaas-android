import {t} from '../../messages';
import {getUnit} from './questionType';

const key = 'singleChoice';
const getAnswerString = (question, value) => `${t(value)} ${getUnit(question)}`;

export default {
  key,
  getAnswerString
}
