import {t} from '../../messages';

const key = 'age';
const getAnswerString = (question, value) => {
  const years = Math.floor(value / 12);
  const months = value % 12;
  return `${years} ${t('years')} ${months} ${t('months')}`;
};

export default {
  key,
  getAnswerString,
};
