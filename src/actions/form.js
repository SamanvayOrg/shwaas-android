import {actions} from '../reducers/form';

const setValue = (question, value) => {
  console.log('setValue', question, value);
  return {
    type: actions.SET_VALUE,
    key: question.key,
    value,
  };
};

const goToNextQuestion = () => {
  return {
    type: actions.GO_TO_NEXT_QUESTION,
  };
};

const goToPreviousQuestion = () => {
  return {
    type: actions.GO_TO_PREVIOUS_QUESTION,
  };
};

export {setValue, goToNextQuestion, goToPreviousQuestion};
