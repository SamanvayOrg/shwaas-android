import {t} from '../../messages';

const key = 'boolean';
const getAnswerString = (question, value) => value === true ? t('yes') : t('no');

export default {
  key,
  getAnswerString
}
