import {outputColors} from './questions/utils';

export default class RecommendationType {
    shortMessageTextAndOuterBoxColor;
    shortMessageKey;
    startingMessageKey;
    description;

    constructor(shortMessageKey,
                startingMessageKey,
                shortMessageTextAndOuterBoxColor,
                nextSteps,) {
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
        'safe',
        'youAre',
        outputColors.green,
        'manageAtHomeNextSteps',
    );
    static ReferToDoctor = new RecommendationType(
        'notSafe',
        'youAre',
        outputColors.yellow,
        'referToDoctor',
    );
    static ReferToDistrictHospital = new RecommendationType(
        'notSafe',
        'youAre',
        outputColors.yellow,
        'referToDistrictHospital',
    );
    static AdmitInHospital = new RecommendationType(
        'notSafe',
        'youAre',
        outputColors.red,
        'admitInHospital',
    );
}
