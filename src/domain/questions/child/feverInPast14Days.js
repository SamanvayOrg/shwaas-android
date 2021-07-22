import feverInPast14Days from '../adult/feverInPast14Days';
import {objectify, outputWeight} from '../utils';

const output = form => {
  return form.coughInPast14Days === false &&
    form[feverInPast14Days.key] === false
    ? objectify(outputWeight.black)
    : objectify(outputWeight.green);
};

export default {
  ...feverInPast14Days,
  label: 'childFeverInPast14Days',
  output,
  optionImages: {
    yes: require('../../../assets/child/fever.jpg'),
  },
  commonImage: require('../../../assets/child/fever.jpg'),
};
