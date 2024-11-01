import assessOxygenSaturationQuestion from './assessOxygenSaturationQuestion';
import {Question} from "@/domain/Question";

export default <Question>{
  ...assessOxygenSaturationQuestion('blueFingerTips'),
  optionImages: {
    yes: require('../../../assets/images/blueFingerTips.png'),
  },
  commonImage: require('../../../assets/images/blueFingerTips.png'),
};
