import assessOxygenSaturationQuestion from './assessOxygenSaturationQuestion';

export default {
  ...assessOxygenSaturationQuestion('blueTongue'),
  optionImages: {
    yes: require('../../../assets/blueLips.jpg'),
  },
  commonImage: require('../../../assets/blueLips.jpg'),
};
