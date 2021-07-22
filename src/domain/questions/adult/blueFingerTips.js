import assessOxygenSaturationQuestion from './assessOxygenSaturationQuestion';

export default {
  ...assessOxygenSaturationQuestion('blueFingerTips'),
  optionImages: {
    yes: require('../../../assets/blueFingerTips.png'),
  },
  commonImage: require('../../../assets/blueFingerTips.png'),
};
