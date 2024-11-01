import assessOxygenSaturationQuestion from './assessOxygenSaturationQuestion';

export default {
  ...assessOxygenSaturationQuestion('blueTongue'),
  optionImages: {
    yes: require('../../../assets/images/blueLips.jpg'),
  },
  commonImage: require('../../../assets/images/blueLips.jpg'),
};
