const actions = {
  SET_VALUE: 'SET_VALUE',
  START_OVER: 'START_OVER',
};

const createInitialState = () => ({});

const reducer = (state = createInitialState(), action) => {
  const getValue = (key, value) => {
    const obj = {};
    obj[key] = value;
    return obj;
  };

  switch (action.type) {
    case actions.SET_VALUE: {
      console.log(action);
      return {
        ...state,
        ...getValue(action.key, action.value),
      };
    }
    case actions.START_OVER: {
      return createInitialState();
    }
    default: {
      return state;
    }
  }
};

export {actions, reducer};
