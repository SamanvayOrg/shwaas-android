import questionTypes from '../../questionTypes/questionTypes';
import {alwaysGreen, alwaysShow} from '../utils';
import {Question} from "@/domain/Question";

const key = 'accessToBPMachine';

export default <Question> {
  key,
  label: key,
  type: questionTypes.boolean,
  show: alwaysShow,
  output: alwaysGreen,
  optionImages: {
    yes: require('../../../assets/images/bpMachine.jpg'),
  },
  commonImage: require('../../../assets/images/bpMachine.jpg'),
};
