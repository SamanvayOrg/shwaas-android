import questionTypes from '../../questionTypes/questionTypes';
import {objectify, outputWeight} from '../utils';
import {Question} from "@/domain/Question";

const key = 'otherAilments';

const show = ({comorbidities = []}) => comorbidities.length === 0;

const output = form => {
  const values = form[key] || [];
  if (values.length > 0) {
    return objectify(outputWeight.yellow, 'otherAilmentsYellow');
  }
};

export default <Question>{
  key,
  label: key,
  type: questionTypes.multichoice,
  options: ['palpitations', 'pedalSwelling', 'jaundice', 'abdominalSwelling'],
  optionImages: {
    palpitations: require('../../../assets/images/palpitations.jpg'),
    pedalSwelling: require('../../../assets/images/pedalSwelling.jpg'),
    jaundice: require('../../../assets/images/jaundice.png'),
    abdominalSwelling: require('../../../assets/images/abdominalSwelling.png'),
  },
  show,
  output,
};
