import {actions} from '../reducers/form';

const setValue = (question, value) => {
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

export {setValue};
