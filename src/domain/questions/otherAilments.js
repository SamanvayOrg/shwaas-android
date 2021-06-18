import questionTypes from '../questionTypes';
import {objectify, outputWeight} from './utils';

const key = 'otherAilments';

const show = ({comorbidities = []}) => comorbidities.length === 0;

const output = form => {
  const values = form[key] || [];
  if (values.length > 0) {
    return objectify(outputWeight.yellow, 'otherAilmentsYellow');
  }
};

export default {
  key,
  label: key,
  type: questionTypes.multichoice,
  options: ['palpitations', 'pedalSwelling', 'jaundice', 'abdominalSwelling'],
  show,
  output,
};
