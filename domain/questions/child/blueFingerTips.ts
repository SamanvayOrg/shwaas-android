import blueFingerTips from '../adult/blueFingerTips';
import {Question} from "@/domain/Question";

export default <Question>{
  ...blueFingerTips,
  label: 'childBlueFingerTips',
  optionImages: {
    yes: require('../../../assets/images/child/blueFingers.jpg'),
  },
  commonImage: require('../../../assets/images/child/blueFingers.jpg'),
};
