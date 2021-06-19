import {t} from '../../messages';

const key = 'multichoice';
const getAnswerString = (question, value) => value.map(item => t(item)).join(', ');

export default {
  key,
  getAnswerString
}
