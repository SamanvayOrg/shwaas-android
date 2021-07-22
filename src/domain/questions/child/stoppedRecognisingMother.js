import questionTypes from '../../questionTypes/questionTypes';
import {alwaysShow, redIfTrue} from '../utils';

const key = 'stoppedRecognisingMother';

const output = form => redIfTrue(form[key]);

export default {
  key,
  label: key,
  helpText: 'stoppedRecognisingMotherHelpText',
  type: questionTypes.boolean,
  show: alwaysShow,
  output,
  optionImages: {
    yes: require('../../../assets/child/notRecognizingMother.jpg'),
  },
  commonImage: require('../../../assets/child/notRecognizingMother.jpg'),
};
