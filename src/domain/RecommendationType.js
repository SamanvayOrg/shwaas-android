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

  static Safe = new RecommendationType('safe', 'youAre', outputColors.green);
  static NotSafe = new RecommendationType(
    'notSafe',
    'youAre',
    outputColors.red,
  );
  static Quarantine = new RecommendationType(
    'quarantine',
    'youNeedTo',
    outputColors.yellow,
  );
  static NotUseful = new RecommendationType(
    'notUseful',
    'forThisPerson',
    outputColors.yellow,
  );

  static mapping = {
    green: RecommendationType.Safe,
    yellow: RecommendationType.Quarantine,
    red: RecommendationType.NotSafe,
    black: RecommendationType.NotUseful,
  };

  static getRecommendationType(color) {
    return RecommendationType.mapping[color];
  }
}
