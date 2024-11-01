import coughInPast14Days from '../adult/coughInPast14Days';

export default {
  ...coughInPast14Days,
  label: 'childCoughInPast14Days',
  optionImages: {
    yes: require('../../../assets/images/child/cough.jpg'),
  },
  commonImage: require('../../../assets/images/child/cough.jpg'),
};
