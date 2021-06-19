import {t} from '../../messages';
import booleanQuestionType from './booleanQuestionType';
import breathCountQuestionType from './breathCountQuestionType';
import informationQuestionType from './informationQuestionType';
import multichoiceQuestionType from './multichoiceQuestionType';
import numericQuestionType from './numericQuestionType';
import timerQuestionType from './timerQuestionType';

const isBoolean = key => key === booleanQuestionType.key;
const isBreathCount = key => key === breathCountQuestionType.key;
const isInformation = key => key === informationQuestionType.key;
const isMultiChoice = key => key === multichoiceQuestionType.key;
const isNumeric = key => key === numericQuestionType.key;
const isSingleChoice = key => key === multichoiceQuestionType.key;
const isTimer = key => key === timerQuestionType.key;

export const getUnit = question => (question.unit ? t(question.unit) : '');

export const createQuestionType = (questionType) => ({
  ...questionType,
  isBoolean: isBoolean(questionType.key),
  isBreathCount: isBreathCount(questionType.key),
  isInformation: isInformation(questionType.key),
  isMultiChoice: isMultiChoice(questionType.key),
  isNumeric: isNumeric(questionType.key),
  isSingleChoice: isSingleChoice(questionType.key),
  isTimer: isTimer(questionType.key)
});
