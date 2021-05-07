import {actions} from '../reducers/form';

const setValue = (question, value) => ({
  type: actions.SET_VALUE,
  key: question.key,
  value,
});

const goToNextQuestion = () => {
  return {
    type: actions.GO_TO_NEXT_QUESTION,
  };
};

const goToPreviousQuestion = () => ({
  type: actions.GO_TO_PREVIOUS_QUESTION,
});

const goToChosenQuestion = index => {
  return {
    type: actions.GO_TO_CHOSEN_QUESTION,
    index: index,
  };
};

const resetCalculator = () => ({type: actions.START_OVER});

export {
  resetCalculator,
  setValue,
  goToNextQuestion,
  goToPreviousQuestion,
  goToChosenQuestion,
};
