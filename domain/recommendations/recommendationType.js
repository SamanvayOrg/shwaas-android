import ageTypes from '../ageTypes';
import childRecommendationType from './childRecommendationType';
import adultRecommendationType from './adultRecommendationType';

const recommendationTypeForAge = ageType =>
  ageType === ageTypes.ADULT
    ? adultRecommendationType
    : childRecommendationType;
const recommendationTypeFor = key => ageType =>
  recommendationTypeForAge(ageType)[key];

export default {
  NotUseful: recommendationTypeFor('NotUseful'),
  ManageAtHome: recommendationTypeFor('ManageAtHome'),
  ReferToDoctor: recommendationTypeFor('ReferToDoctor'),
  ReferToDistrictHospital: recommendationTypeFor('ReferToDistrictHospital'),
  AdmitInHospital: recommendationTypeFor('AdmitInHospital'),
};
