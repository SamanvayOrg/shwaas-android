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
    description,
  ) {
    this.shortMessageKey = shortMessageKey;
    this.startingMessageKey = startingMessageKey;
    this.shortMessageTextAndOuterBoxColor = shortMessageTextAndOuterBoxColor;
    this.description = description;
  }

  static NotUseful = new RecommendationType(
    'notUseful',
    'forThisPerson',
    outputColors.black,
    '',
  );
  static ManageAtHome = new RecommendationType(
    'safe',
    'youAre',
    outputColors.green,
    'manageAtHomeOrVillage',
  );
  static ReferToDoctor = new RecommendationType(
    'notSafe',
    'youAre',
    outputColors.yellow,
    'lessThan3YellowMessage',
  );
  static ReferToDistrictHospital = new RecommendationType(
    'notSafe',
    'youAre',
    outputColors.yellow,
    'moreThan3YellowMessage',
  );
  static AdmitInHospital = new RecommendationType(
    'notSafe',
    'youAre',
    outputColors.red,
    'admitAtHospital',
  );
}
