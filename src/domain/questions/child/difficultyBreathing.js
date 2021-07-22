import difficultyBreathing from '../adult/difficultyBreathing';

export default {
  ...difficultyBreathing,
  label: 'childDifficultyBreathing',
  optionImages: {
    yes: require('../../../assets/breathless.jpg'),
  },
  commonImage: require('../../../assets/breathless.jpg'),
};
