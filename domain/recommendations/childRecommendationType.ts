import {outputColors} from '../questions/utils';
import createRecommendationType from './createRecommendationType';

const NotUseful = createRecommendationType(
  'notUseful',
  'forThisChild',
  outputColors.black,
  'toolUnlikelyToHelpChild',
);
const ManageAtHome = createRecommendationType(
  'greenRecommendationShortMessageLine2',
  'childGreenRecommendationShortMessageLine1',
  outputColors.green,
  'childManageAtHomeNextSteps',
);
const ReferToDoctor = createRecommendationType(
  'yellowRecommendationShortMessageLine2',
  'childYellowRecommendationShortMessageLine1',
  outputColors.yellow,
  'childReferToDoctor',
);
const ReferToDistrictHospital = createRecommendationType(
  'yellowRecommendationShortMessageLine2',
  'childYellowRecommendationShortMessageLine1',
  outputColors.yellow,
  'childReferToDoctor',
);
const AdmitInHospital = createRecommendationType(
  'redRecommendationShortMessageLine2',
  'childRedRecommendationShortMessageLine1',
  outputColors.red,
  'childAdmitInHospital',
);

export default {
  NotUseful,
  ManageAtHome,
  ReferToDoctor,
  ReferToDistrictHospital,
  AdmitInHospital,
};
