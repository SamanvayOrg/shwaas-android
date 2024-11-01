import {t} from 'i18next';

export const getUnit = question => (question.unit ? t(question.unit) : '');
