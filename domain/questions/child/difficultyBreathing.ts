import difficultyBreathing from '../adult/difficultyBreathing';
import {Question} from "@/domain/Question";

export default <Question>{
  ...difficultyBreathing,
  label: 'childDifficultyBreathing',
  optionImages: {
    yes: require('../../../assets/images/breathless.jpg'),
  },
  commonImage: require('../../../assets/images/breathless.jpg'),
};
