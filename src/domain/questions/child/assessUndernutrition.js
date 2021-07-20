import questionTypes from '../../questionTypes/questionTypes';
import midUpperArmCircumference from './midUpperArmCircumference';
import weight from './weight';

const key = 'assessUndernutrition';

const show = form => !form[midUpperArmCircumference.key] && !form[weight.key];
const output = form => form[key].length > 0;

export default {
  key,
  label: key,
  type: questionTypes.multichoice,
  options: ['lossOfBuccalFatPad', 'lightHairs', 'potBelly', 'pedalSwelling'],
  optionImages: {
    lossOfBuccalFatPad: require('../../../assets/child/lossOfBuccalFat.jpg'),
    lightHairs: require('../../../assets/child/greyHair.jpg'),
    potBelly: require('../../../assets/child/abdominalSwelling.jpg'),
    pedalSwelling: require('../../../assets/pedalSwelling.jpg'),
  },
  show,
  output,
};
