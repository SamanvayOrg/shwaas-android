import assessOxygenSaturationQuestion from './assessOxygenSaturationQuestion';
import {Question} from "@/domain/Question";

export default <Question>{
  ...assessOxygenSaturationQuestion('blueLips'),
  optionImages: {
    yes: require('../../../assets/images/blueLips.jpg'),
  },
  commonImage: require('../../../assets/images/blueLips.jpg'),
};
