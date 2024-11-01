import blueTongue from '../adult/blueTongue';
import {Question} from "@/domain/Question";

export default <Question>{
  ...blueTongue,
  label: 'childBlueTongue',
  optionImages: {
    yes: require('../../../assets/images/child/blueTongue.jpg'),
  },
  commonImage: require('../../../assets/images/child/blueTongue.jpg'),
};
