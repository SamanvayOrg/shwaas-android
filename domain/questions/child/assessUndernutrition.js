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
    lossOfBuccalFatPad: require('../../../assets/images/child/lossOfBuccalFat.jpg'),
    lightHairs: require('../../../assets/images/child/greyHair.jpg'),
    potBelly: require('../../../assets/images/child/abdominalSwelling.jpg'),
    pedalSwelling: require('../../../assets/images/pedalSwelling.jpg'),
  },
  show,
  output,
};
