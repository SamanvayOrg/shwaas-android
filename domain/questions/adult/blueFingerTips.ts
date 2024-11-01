import assessOxygenSaturationQuestion from './assessOxygenSaturationQuestion';

export default {
  ...assessOxygenSaturationQuestion('blueFingerTips'),
  optionImages: {
    yes: require('../../../assets/images/blueFingerTips.png'),
  },
  commonImage: require('../../../assets/images/blueFingerTips.png'),
};
