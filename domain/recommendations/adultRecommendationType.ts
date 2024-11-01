import {outputColor} from '../questions/utils';
import createRecommendationType from './createRecommendationType';

const NotUseful = createRecommendationType(
  'notUseful',
  'forThisPerson',
  outputColor.black,
  'toolUnlikelyToHelpPerson',
);
const ManageAtHome = createRecommendationType(
  'greenRecommendationShortMessageLine2',
  'greenRecommendationShortMessageLine1',
  outputColor.green,
  'manageAtHomeNextSteps',
);
const ReferToDoctor = createRecommendationType(
  'yellowRecommendationShortMessageLine2',
  'yellowRecommendationShortMessageLine1',
  outputColor.yellow,
  'referToDoctor',
);
const ReferToDistrictHospital = createRecommendationType(
  'yellowRecommendationShortMessageLine2',
  'yellowRecommendationShortMessageLine1',
  outputColor.yellow,
  'referToDistrictHospital',
);
const AdmitInHospital = createRecommendationType(
  'redRecommendationShortMessageLine2',
  'redRecommendationShortMessageLine1',
  outputColor.red,
  'admitInHospital',
);

export default {
  NotUseful,
  ManageAtHome,
  ReferToDoctor,
  ReferToDistrictHospital,
  AdmitInHospital,
};
