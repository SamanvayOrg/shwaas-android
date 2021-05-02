const alwaysShow = () => true;

const outputWeight = {
  green: 'green',
  yellow: 'yellow',
  red: 'red',
  black: 'black', //The tool cannot be used in such a scenario
};

const alwaysGreen = () => outputWeight.green;
const redIfTrue = value =>
  value === true ? outputWeight.red : outputWeight.green;

export {alwaysShow, alwaysGreen, outputWeight, redIfTrue};
