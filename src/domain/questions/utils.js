import colors from '../../colors';
const alwaysShow = () => true;

const outputWeight = {
  green: 'green',
  yellow: 'yellow',
  red: 'red',
  black: 'black', //The tool cannot be used in such a scenario
};

const outputColors = {
  green: colors.green,
  yellow: colors.yellow,
  red: colors.red,
  black: colors.black,
};

const alwaysGreen = message => ({weight: outputWeight.green, message});

const redIfBoolean = (value, message, booleanValue) =>
  value === booleanValue
    ? {weight: outputWeight.red, message}
    : {weight: outputWeight.green};

const redIfTrue = (value, message) => redIfBoolean(value, message, true);
const redIfFalse = (value, message) => redIfBoolean(value, message, false);

const objectify = (weight, message) => ({weight, message});

const isDefined = item => item !== undefined && item !== null;

export {
  alwaysShow,
  alwaysGreen,
  outputWeight,
  redIfTrue,
  redIfFalse,
  outputColors,
  isDefined,
  objectify,
};
