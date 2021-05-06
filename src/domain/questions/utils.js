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

const alwaysGreen = () => outputWeight.green;
const redIfTrue = value =>
  value === true ? outputWeight.red : outputWeight.green;

const isDefined = item => item !== undefined && item !== null;

export {
  alwaysShow,
  alwaysGreen,
  outputWeight,
  redIfTrue,
  outputColors,
  isDefined,
};
