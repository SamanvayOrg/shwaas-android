import booleanQuestionType from './booleanQuestionType';
import numericQuestionType from './numericQuestionType';
import multichoiceQuestionType from './multichoiceQuestionType';
import singleChoiceQuestionType from './singleChoiceQuestionType';
import breathCountQuestionType from './breathCountQuestionType';
import informationQuestionType from './informationQuestionType';
import timerQuestionType from './timerQuestionType';
import {createQuestionType} from './questionType';

export default {
  boolean: createQuestionType(booleanQuestionType),
  numeric: createQuestionType(numericQuestionType),
  multichoice: createQuestionType(multichoiceQuestionType),
  singleChoice: createQuestionType(singleChoiceQuestionType),
  breathCount: createQuestionType(breathCountQuestionType),
  information: createQuestionType(informationQuestionType),
  timer: createQuestionType(timerQuestionType),
};
