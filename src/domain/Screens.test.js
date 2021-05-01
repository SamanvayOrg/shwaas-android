import Screens from './Screens';

describe('Screen transit logic', () => {
  test('starts with Screens.start', () => {
    const firstScreen = Screens.start;
    expect(firstScreen.questions.length).toBeGreaterThan(0);
  });

  test('Each question in the screen questions has a key, type and a nextSteps' , () => {
    const firstScreen = Screens.start;
    const firstQuestion = firstScreen.questions[0];
    expect(firstQuestion.key).toBeDefined();
    expect(firstQuestion.type).toBeDefined();
    expect(firstQuestion.nextSteps).toBeDefined();
  });

  test('Calling the nextSteps function lets you go to the next screen', () => {
    const firstScreen = Screens.start;
    const form = {};
    form[firstScreen.questions[0].key] = 'some value';
    const nextScreen = firstScreen.questions[0].nextSteps();
    expect(nextScreen.questions[0].key).toBeDefined();
  });
});
