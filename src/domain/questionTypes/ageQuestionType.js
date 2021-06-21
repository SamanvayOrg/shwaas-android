import {t} from '../../messages';

const key = 'age';
const getAnswerString = (question, value) =>
  value === true ? t('yes') : t('no');

export default {
  key,
  getAnswerString,
};
