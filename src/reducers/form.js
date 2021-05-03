import {nextQuestion} from '../domain/questionStatus';

const actions = {
  SET_VALUE: 'SET_VALUE',
  START_OVER: 'START_OVER',
  SET_CURRENT_QUESTION_KEY: 'SET_CURRENT_QUESTION_KEY',
  GO_TO_NEXT_QUESTION: 'GO_TO_NEXT_QUESTION',
};

const createInitialState = () => ({
  form: {},
  currentQuestionKey: nextQuestion(),
});

const reducer = (state = createInitialState(), action) => {
  const getValue = (key, value) => {
    const obj = {};
    obj[key] = value;
    return obj;
  };

  switch (action.type) {
    case actions.SET_VALUE: {
      return {
        ...state,
        form: {
          ...state.form,
          ...getValue(action.key, action.value),
        },
      };
    }
    case actions.START_OVER: {
      return createInitialState();
    }
    case actions.SET_CURRENT_QUESTION_KEY: {
      return {
        ...state,
        currentQuestionKey: action.questionKey,
      };
    }
    case actions.GO_TO_NEXT_QUESTION: {
      return {
        ...state,
        currentQuestionKey: nextQuestion(state.form, state.currentQuestionKey),
      };
    }
    default: {
      return state;
    }
  }
};

export {actions, reducer};
