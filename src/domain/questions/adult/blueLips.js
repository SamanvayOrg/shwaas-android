import assessOxygenSaturationQuestion from './assessOxygenSaturationQuestion';

export default {
  ...assessOxygenSaturationQuestion('blueLips'),
  optionImages: {
    yes: require('../../../assets/blueLips.jpg'),
  },
  commonImage: require('../../../assets/blueLips.jpg'),
};
