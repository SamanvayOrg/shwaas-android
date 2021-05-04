import pneumoniaDetectionQuestions from './pneumoniaDetectionQuestions';
import {outputWeight} from './questions/utils';
import questionTypes from './questionTypes';
import messages from './messages';

const questions = pneumoniaDetectionQuestions;

const isFunction = (functionToCheck) => {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
};

questions.map(question => {
  if (!question.key) {
    console.error(`Question does not have key - ${JSON.stringify(question)}`);
    return;
  }
  if (!messages[question.key]) {
    console.error(`Question ${question.key} should have a key in messages`);
  }
  if (!questionTypes[question.type]) {
    console.error(`Question ${question.key} does not have the right type`);
  }
  if (!isFunction(question.show)) {
    console.error(`Question ${question.key} does not have the show function`);
  }
  if (!isFunction(question.output)) {
    console.error(`Question ${question.key} does not have the output function`);
  }
});

const visibleQuestions = (form = {}) =>
  questions.filter(question => question.show(form) === true);

const nextQuestion = (form, questionKey) => {
  let visibleQs = visibleQuestions(form);
  if (!questionKey) {
    return visibleQs[0];
  }

  const indexOfCurrentQuestion = visibleQs.findIndex(
    q => q.key === questionKey,
  );
  if (indexOfCurrentQuestion === questions.length - 1) {
    return null;
  }
  return visibleQs[indexOfCurrentQuestion + 1];
};

const previousQuestion = (form, questionKey) => {
  let visibleQs = visibleQuestions(form);

  const indexOfCurrentQuestion = visibleQs.findIndex(
    q => q.key === questionKey,
  );

  if (indexOfCurrentQuestion === 0) {
    return null;
  }

  return visibleQs[indexOfCurrentQuestion - 1];
};

const indexOfQuestion = (form, question) => {
  return visibleQuestions(form).findIndex(q => q.key === question.key);
};

const questionAt = (index, form) => visibleQuestions(form)[index];

const numberOfQuestions = form => visibleQuestions(form).length;

const questionWithKey = key => questions.find(question => question.key === key);

const calculateRisk = (form) => {
  const answerKeys = Object.keys(form);
  const notUseful = answerKeys.some(answerKey => {
    return questionWithKey(answerKey).output(form) === outputWeight.black
  });
  if (notUseful) return outputWeight.black;

  const red = answerKeys.some(answerKey => questionWithKey(answerKey).output(form) === outputWeight.red);
  if (red) return outputWeight.red;

  let yellowQuestions = answerKeys.filter(answerKey => questionWithKey(answerKey).output(form) === outputWeight.yellow);
  const yellow = yellowQuestions.length <= 3 && yellowQuestions > 0;
  if (yellow) return outputWeight.yellow;

  return outputWeight.green;
};

export {
  questions,
  visibleQuestions,
  questionAt,
  numberOfQuestions,
  nextQuestion,
  previousQuestion,
  questionWithKey,
  calculateRisk,
  indexOfQuestion,
};
