import assessOxygenSaturationQuestion from './assessOxygenSaturationQuestion';
import {Question} from "@/domain/Question";

export default <Question>{
  ...assessOxygenSaturationQuestion('blueTongue'),
  optionImages: {
    yes: require('../../../assets/images/blueLips.jpg'),
  },
  commonImage: require('../../../assets/images/blueLips.jpg'),
};
