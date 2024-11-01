import {outputColor} from '../questions/utils';
import createRecommendationType from './createRecommendationType';

const NotUseful = createRecommendationType(
  'notUseful',
  'forThisChild',
  outputColor.black,
  'toolUnlikelyToHelpChild',
);
const ManageAtHome = createRecommendationType(
  'greenRecommendationShortMessageLine2',
  'childGreenRecommendationShortMessageLine1',
  outputColor.green,
  'childManageAtHomeNextSteps',
);
const ReferToDoctor = createRecommendationType(
  'yellowRecommendationShortMessageLine2',
  'childYellowRecommendationShortMessageLine1',
  outputColor.yellow,
  'childReferToDoctor',
);
const ReferToDistrictHospital = createRecommendationType(
  'yellowRecommendationShortMessageLine2',
  'childYellowRecommendationShortMessageLine1',
  outputColor.yellow,
  'childReferToDoctor',
);
const AdmitInHospital = createRecommendationType(
  'redRecommendationShortMessageLine2',
  'childRedRecommendationShortMessageLine1',
  outputColor.red,
  'childAdmitInHospital',
);

export default {
  NotUseful,
  ManageAtHome,
  ReferToDoctor,
  ReferToDistrictHospital,
  AdmitInHospital,
};
