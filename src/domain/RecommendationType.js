export default class RecommendationType {
    shortMessageTextAndOuterBoxColor;
    shortMessageKey;
    startingMessageKey;

    constructor(shortMessageKey, startingMessageKey, shortMessageTextAndOuterBoxColor) {
        this.shortMessageKey = shortMessageKey;
        this.startingMessageKey = startingMessageKey;
        this.shortMessageTextAndOuterBoxColor = shortMessageTextAndOuterBoxColor;
    }

    static Safe = new RecommendationType('safe', 'youAre', '#38A160');
    static NotSafe = new RecommendationType('notSafe', 'youAre', '#E24C4C');
    static Quarantine = new RecommendationType('quarantine','youNeedTo', '#D6932E');
    static NotUseful = new RecommendationType('notUseful', '', '#D6932E');

    static mapping = {
        'green': RecommendationType.Safe,
        'yellow': RecommendationType.Quarantine,
        'red': RecommendationType.NotSafe,
        'black': RecommendationType.NotUseful
    };

    static getRecommendationType(color) {
        return RecommendationType.mapping[color];
    }
}

