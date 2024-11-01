import blueLips from '../adult/blueLips';
import {Question} from "@/domain/Question";

export default <Question>{
  ...blueLips,
  label: 'childBlueLips',
  optionImages: {
    yes: require('../../../assets/images/child/blueLips.jpg'),
  },
  commonImage: require('../../../assets/images/child/blueLips.jpg'),
};
