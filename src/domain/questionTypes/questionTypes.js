import booleanQuestionType from './booleanQuestionType';
import numericQuestionType from './numericQuestionType';
import multichoiceQuestionType from './multichoiceQuestionType';
import singleChoiceQuestionType from './singleChoiceQuestionType';
import breathCountQuestionType from './breathCountQuestionType';
import informationQuestionType from './informationQuestionType';
import timerQuestionType from './timerQuestionType';
import {createQuestionType} from './questionType';
import ageQuestionType from './ageQuestionType';

export default {
  boolean: createQuestionType(booleanQuestionType),
  numeric: createQuestionType(numericQuestionType),
  multichoice: createQuestionType(multichoiceQuestionType),
  singleChoice: createQuestionType(singleChoiceQuestionType),
  breathCount: createQuestionType(breathCountQuestionType),
  information: createQuestionType(informationQuestionType),
  timer: createQuestionType(timerQuestionType),
  age: createQuestionType(ageQuestionType),
};
