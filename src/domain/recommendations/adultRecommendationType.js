import {outputColors} from '../questions/utils';
import createRecommendationType from './createRecommendationType';

const NotUseful = createRecommendationType(
  'notUseful',
  'forThisPerson',
  outputColors.black,
  'toolUnlikelyToHelpPerson',
);
const ManageAtHome = createRecommendationType(
  'greenRecommendationShortMessageLine2',
  'greenRecommendationShortMessageLine1',
  outputColors.green,
  'manageAtHomeNextSteps',
);
const ReferToDoctor = createRecommendationType(
  'yellowRecommendationShortMessageLine2',
  'yellowRecommendationShortMessageLine1',
  outputColors.yellow,
  'referToDoctor',
);
const ReferToDistrictHospital = createRecommendationType(
  'yellowRecommendationShortMessageLine2',
  'yellowRecommendationShortMessageLine1',
  outputColors.yellow,
  'referToDistrictHospital',
);
const AdmitInHospital = createRecommendationType(
  'redRecommendationShortMessageLine2',
  'redRecommendationShortMessageLine1',
  outputColors.red,
  'admitInHospital',
);

export default {
  NotUseful,
  ManageAtHome,
  ReferToDoctor,
  ReferToDistrictHospital,
  AdmitInHospital,
};
