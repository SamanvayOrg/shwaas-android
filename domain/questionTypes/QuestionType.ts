import {t} from 'i18next';
import {getUnit} from '@/domain/questionTypes/questionUnit';

enum Type {
    boolean = 'boolean',
    breathCount = 'breathCount',
    information = 'information',
    multichoice = "multichoice",
    numeric = "numeric",
    singleChoice = "singleChoice",
    timer = "timer",
    age = "age"
}

const questionTypeMatches = (questionType: Type, key: Type): boolean => questionType === key;

export interface QuestionType {
    type: QuestionType,
    key: boolean,
    isBoolean: boolean,
    isBreathCount: boolean,
    isInformation: boolean,
    isMultiChoice: boolean,
    isNumeric: boolean,
    isSingleChoice: boolean,
    isTimer: boolean,
    isAge: boolean
}

export const createQuestionType = questionType => ({
    type: questionType,
    key: questionType,
    isBoolean: questionTypeMatches(questionType, Type.boolean),
    isBreathCount: questionTypeMatches(questionType, Type.breathCount),
    isInformation: questionTypeMatches(questionType, Type.information),
    isMultiChoice: questionTypeMatches(questionType, Type.multichoice),
    isNumeric: questionTypeMatches(questionType, Type.numeric),
    isSingleChoice: questionTypeMatches(questionType, Type.singleChoice),
    isTimer: questionTypeMatches(questionType, Type.timer),
    isAge: questionTypeMatches(questionType, Type.age),
});

export const answerString = (question, value) => {
    if (question.isBoolean) return value === true ? t('yes') : t('no');
    if (question.isBreathCount) return `${value} ${getUnit(question)}`;
    if (question.isInformation) return '';
    if (question.isMultiChoice) return value.map(item => t(item)).join(', ');
    if (question.isNumeric) return `${value} ${getUnit(question)}`;
    if (question.isSingleChoice) return `${t(value)} ${getUnit(question)}`;
    if (question.isTimer) return `${value} ${getUnit(question)}`;
    if (question.isAge) {
        {
            const years = Math.floor(value / 12);
            const months = value % 12;
            return `${years} ${t('years')} ${months} ${t('months')}`;
        }
    }
    return '';
};

export default {
    boolean: createQuestionType(Type.boolean),
    numeric: createQuestionType(Type.numeric),
    multichoice: createQuestionType(Type.multichoice),
    singleChoice: createQuestionType(Type.singleChoice),
    breathCount: createQuestionType(Type.breathCount),
    information: createQuestionType(Type.information),
    timer: createQuestionType(Type.timer),
    age: createQuestionType(Type.age),
};
