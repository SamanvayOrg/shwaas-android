import difficultyBreathing from '../adult/difficultyBreathing';

export default {
  ...difficultyBreathing,
  label: 'childDifficultyBreathing',
  optionImages: {
    yes: require('../../../assets/images/breathless.jpg'),
  },
  commonImage: require('../../../assets/images/breathless.jpg'),
};
