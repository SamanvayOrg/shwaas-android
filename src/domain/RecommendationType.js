import {outputColors} from './questions/utils';

export default class RecommendationType {
  shortMessageTextAndOuterBoxColor;
  shortMessageKey;
  startingMessageKey;
  description;

  constructor(
    shortMessageKey,
    startingMessageKey,
    shortMessageTextAndOuterBoxColor,
    nextSteps,
  ) {
    this.shortMessageKey = shortMessageKey;
    this.startingMessageKey = startingMessageKey;
    this.shortMessageTextAndOuterBoxColor = shortMessageTextAndOuterBoxColor;
    this.nextSteps = nextSteps;
  }

  static NotUseful = new RecommendationType(
    'notUseful',
    'forThisPerson',
    outputColors.black,
    'toolUnlikelyToHelpPerson',
  );
  static ManageAtHome = new RecommendationType(
    'greenRecommendationShortMessageLine2',
    'greenRecommendationShortMessageLine1',
    outputColors.green,
    'manageAtHomeNextSteps',
  );
  static ReferToDoctor = new RecommendationType(
    'yellowRecommendationShortMessageLine2',
    'yellowRecommendationShortMessageLine1',
    outputColors.yellow,
    'referToDoctor',
  );
  static ReferToDistrictHospital = new RecommendationType(
    'yellowRecommendationShortMessageLine2',
    'yellowRecommendationShortMessageLine1',
    outputColors.yellow,
    'referToDistrictHospital',
  );
  static AdmitInHospital = new RecommendationType(
    'redRecommendationShortMessageLine2',
    'redRecommendationShortMessageLine1',
    outputColors.red,
    'admitInHospital',
  );
}
