import {t} from 'i18next';
import {getUnit} from '@/domain/questionTypes/questionUnit';

enum questionTypes {
    boolean = 'boolean',
    breathCount = 'breathCount',
    information = 'information',
    multichoice = "multichoice",
    numeric = "numeric",
    singleChoice = "singleChoice",
    timer = "timer",
    age = "age"
}

const questionTypeMatches = (questionType: questionTypes, key: questionTypes): boolean => questionType === key;

export const createQuestionType = questionType => ({
    type: questionType,
    key: (questionType),
    isBoolean: questionTypeMatches(questionType, questionTypes.boolean),
    isBreathCount: questionTypeMatches(questionType, questionTypes.breathCount),
    isInformation: questionTypeMatches(questionType, questionTypes.information),
    isMultiChoice: questionTypeMatches(questionType, questionTypes.multichoice),
    isNumeric: questionTypeMatches(questionType, questionTypes.numeric),
    isSingleChoice: questionTypeMatches(questionType, questionTypes.singleChoice),
    isTimer: questionTypeMatches(questionType, questionTypes.timer),
    isAge: questionTypeMatches(questionType, questionTypes.age),
});

export default {
    boolean: createQuestionType(questionTypes.boolean),
    numeric: createQuestionType(questionTypes.numeric),
    multichoice: createQuestionType(questionTypes.multichoice),
    singleChoice: createQuestionType(questionTypes.singleChoice),
    breathCount: createQuestionType(questionTypes.breathCount),
    information: createQuestionType(questionTypes.information),
    timer: createQuestionType(questionTypes.timer),
    age: createQuestionType(questionTypes.age),
};

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
