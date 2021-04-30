import {actions} from '../reducers/form';

const setValue = (key, value) => {
  return {
    type: actions.SET_VALUE,
    key,
    value,
  };
};

export {setValue};
