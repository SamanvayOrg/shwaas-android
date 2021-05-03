import {actions} from '../reducers/form';

const setValue = (question, value) => ({
  type: actions.SET_VALUE,
  key: question.key,
  value,
});

const goToNextQuestion = () => ({
  type: actions.GO_TO_NEXT_QUESTION,
});

const goToPreviousQuestion = () => ({
  type: actions.GO_TO_PREVIOUS_QUESTION,
});

const resetCalculator = () => ({type: actions.START_OVER});

export {resetCalculator, setValue, goToNextQuestion, goToPreviousQuestion};
