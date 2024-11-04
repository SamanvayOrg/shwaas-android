import questionTypes from '../../questionTypes/QuestionType';
import {alwaysShow, redIfTrue} from '../utils';
import {Question} from "@/domain/Question";

const key = 'stoppedRecognisingMother';

const output = form => redIfTrue(form[key]);

export default <Question>{
  key,
  label: key,
  helpText: 'stoppedRecognisingMotherHelpText',
  type: questionTypes.boolean,
  show: alwaysShow,
  output,
  optionImages: {
    yes: require('../../../assets/images/child/notRecognizingMother.jpg'),
  },
  commonImage: require('../../../assets/images/child/notRecognizingMother.jpg'),
};
