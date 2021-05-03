import {Colors} from 'react-native-paper';

export default class RecommendationType {
    shortMessageTextAndOuterBoxColor;
    shortMessageKey;
    startingMessageKey;

    constructor(shortMessageKey, startingMessageKey, shortMessageTextAndOuterBoxColor) {
        this.shortMessageKey = shortMessageKey;
        this.startingMessageKey = startingMessageKey;
        this.shortMessageTextAndOuterBoxColor = shortMessageTextAndOuterBoxColor;
    }

    static Safe = new RecommendationType('safe', 'youAre', Colors.green600);
    static NotSafe = new RecommendationType('notSafe', 'youAre', Colors.red600);
    static Quarantine = new RecommendationType('quarantine','youNeedTo', '#D6932E');
    static NotUseful = new RecommendationType('notUseful', '', '#D6932E');
}

