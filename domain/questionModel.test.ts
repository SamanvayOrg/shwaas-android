import {removeAnswersNotInQuestionList} from './questionModel';

describe('questionModel', () => {
  it('should filter out answers based on visibleQuestions', () => {
    const answers = {'a': 10, 'accessToPulseOximeter': true};
    const modifiedAnswers = removeAnswersNotInQuestionList(answers);
    expect(modifiedAnswers.a).toBeUndefined();
    expect(modifiedAnswers.accessToPulseOximeter).toBe(true);
  });
});
