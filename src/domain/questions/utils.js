const alwaysShow = () => true;

const outputWeight = {
  green: 'green',
  yellow: 'yellow',
  red: 'red',
  black: 'black', //The tool cannot be used in such a scenario
};

const outputColors = {
  green: '#38A160',
  yellow: '#D6932E',
  red: '#E24C4C',
  black: '#000000',
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
