import {outputColors} from './questions/utils';

export default class RecommendationType {
  shortMessageTextAndOuterBoxColor;
  shortMessageKey;
  startingMessageKey;

  constructor(
    shortMessageKey,
    startingMessageKey,
    shortMessageTextAndOuterBoxColor,
  ) {
    this.shortMessageKey = shortMessageKey;
    this.startingMessageKey = startingMessageKey;
    this.shortMessageTextAndOuterBoxColor = shortMessageTextAndOuterBoxColor;
  }

  static NotUseful = new RecommendationType('notUseful', 'forThisPerson', outputColors.black,);
  static ManageAtHome = new RecommendationType('safe', 'youAre', outputColors.green);
  static ReferToDoctor = new RecommendationType('notSafe', 'youAre', outputColors.yellow);
  static ReferToDistrictHospital = new RecommendationType('notSafe', 'youAre', outputColors.yellow,);
  static AdmitInHospital = new RecommendationType('notSafe', 'youAre', outputColors.red);
}
