import {nextQuestion, previousQuestion} from '../domain/questionModel';

const actions = {
  SET_VALUE: 'SET_VALUE',
  START_OVER: 'START_OVER',
  SET_CURRENT_QUESTION_KEY: 'SET_CURRENT_QUESTION_KEY',
  GO_TO_NEXT_QUESTION: 'GO_TO_NEXT_QUESTION',
  GO_TO_PREVIOUS_QUESTION: 'GO_TO_PREVIOUS_QUESTION',
};

const createInitialState = () => ({
  form: {},
  currentQuestionKey: nextQuestion().key,
});

const reducer = (state = createInitialState(), action) => {
  const getValue = (key, value) => {
    const obj = {};
    obj[key] = value;
    return obj;
  };

  switch (action.type) {
    case actions.SET_VALUE: {
      // console.log('state', {
      //   ...state.form,
      //   ...getValue(action.key, action.value),
      // });
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
      const nextQ = nextQuestion(state.form, state.currentQuestionKey);
      const nextQuestionKey = nextQ ? nextQ.key : state.currentQuestionKey;

      return {
        ...state,
        currentQuestionKey: nextQuestionKey,
      };
    }
    case actions.GO_TO_PREVIOUS_QUESTION: {
      const previousQ = previousQuestion(state.form, state.currentQuestionKey);
      const previousQuestionKey = previousQ
        ? previousQ.key
        : state.currentQuestionKey;

      return {
        ...state,
        currentQuestionKey: previousQuestionKey,
      };
    }
    default: {
      return state;
    }
  }
};

export {actions, reducer};
