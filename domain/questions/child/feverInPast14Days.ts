import feverInPast14Days from '../adult/feverInPast14Days';
import {objectify, outputWeight} from '../utils';
import {Question} from "@/domain/Question";

const output = form => {
  return form.coughInPast14Days === false &&
    form[feverInPast14Days.key] === false
    ? objectify(outputWeight.black)
    : objectify(outputWeight.green);
};

export default <Question>{
  ...feverInPast14Days,
  label: 'childFeverInPast14Days',
  output,
  optionImages: {
    yes: require('../../../assets/images/child/fever.jpg'),
  },
  commonImage: require('../../../assets/images/child/fever.jpg'),
};
