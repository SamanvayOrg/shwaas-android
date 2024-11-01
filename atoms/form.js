import {
    nextQuestion,
    previousQuestion,
    removeAnswersNotInQuestionList,
    visibleQuestions,
} from '@/domain/questionModel';
import {atom} from 'jotai';

const resetForm = () => ({form: {}});
const resetCurrentQuestionKey = () => nextQuestion().key;
const getValue = (key, value) => {
    const obj = {};
    obj[key] = value;
    return obj;
};

export const formAtom = atom(resetForm());
export const currentQuestionKeyAtom = atom(resetCurrentQuestionKey());

export const setValueAction = atom(null, (get, set, {key, value}) => {
    const form = {
        ...(get(formAtom)),
        ...getValue(key, value),
    };
    set(formAtom, removeAnswersNotInQuestionList(form));
});
export const startOverAction = atom(null, (get, set, action) => {
    set(formAtom, resetForm());
    set(currentQuestionKeyAtom, resetCurrentQuestionKey());
});
export const goToNextQuestionAction = atom(null, (get, set, action) => {
    const form = get(formAtom);
    const questionKey = get(currentQuestionKeyAtom);
    const nextQ = nextQuestion(form, questionKey);
    set(currentQuestionKeyAtom, nextQ ? nextQ.key : questionKey);
});
export const goToPreviousQuestionAction = atom(null, (get, set, action) => {
    const form = get(formAtom);
    const questionKey = get(currentQuestionKeyAtom);
    const previousQ = previousQuestion(form, questionKey);
    set(currentQuestionKeyAtom, previousQ ? previousQ.key : questionKey);
});
export const goToChosenQuestionAction = atom(null, (get, set, action) => {
    const form = get(formAtom);
    set(currentQuestionKeyAtom, visibleQuestions(form)[action].key);
});
