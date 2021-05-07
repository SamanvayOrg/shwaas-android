import pneumoniaDetectionQuestions from './pneumoniaDetectionQuestions';
import {outputWeight} from './questions/utils';
import questionTypes from './questionTypes';
import RecommendationType from './RecommendationType';
import comorbidities from './questions/comorbidities';
import fbs from './questions/fbs';
import pp2bs from './questions/pp2bs';
import rbs from './questions/rbs';
import hba1c from './questions/hba1c';
import messages from '../translations/en';
import _ from 'lodash';

const questions = pneumoniaDetectionQuestions;

const isFunction = functionToCheck => {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
  );
};

//Validation of questions. Runs during startup, gives error in console.
//This can be useful when debugging new questions that come up
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

const numberOfYellows = (form, answerKeys) => {
  const irrelevantQuestionKeys = [fbs, pp2bs, rbs, hba1c].map(
    question => question.key,
  );
  const relevantQuestionKeys = visibleQuestions(form)
    .filter(question => !irrelevantQuestionKeys.includes(question.key))
    .map(question => question.key);

  let yellowQuestions = answerKeys.filter(
    answerKey =>
      questionWithKey(answerKey).output(form).weight === outputWeight.yellow,
  );
  const relevantYellowQuestions = yellowQuestions.filter(question =>
    relevantQuestionKeys.includes(question.key),
  );
  const comorbidities = form['comorbidities'] || [];

  const irrelevantComorbiditiesForYellow = [
    'heartDisease',
    'liverDisease',
    'sickleDisease',
    'kidneyDisease',
    'asthma',
    'lungDisease',
    'pregnancy',
  ];
  const relevantComorbiditiesForYellow = comorbidities.filter(comorbidity =>
    irrelevantComorbiditiesForYellow.includes(comorbidity),
  );

  return relevantYellowQuestions.length + relevantComorbiditiesForYellow.length;
};

const getKeysToVisibleQuestions = form => {
  const visibleQuestionKeys = visibleQuestions(form).map(q => q.key);
  return Object.keys(form).filter(key => visibleQuestionKeys.includes(key));
};

const constructRecommendation = (type, messages) => ({type, messages});

const getRecommendation = (answers, additionalQuestion, answer) => {
  const form = {
    ...answers,
  };
  if (additionalQuestion) {
    form[additionalQuestion.key] = answer;
  }

  const answerKeys = getKeysToVisibleQuestions(form);
  const outputs = answerKeys.map(answerKey =>
    questionWithKey(answerKey).output(form),
  );
  let messages = outputs.map(output => output.message);

  const notUseful = outputs.some(
    output => output.weight === outputWeight.black,
  );
  if (notUseful)
    return constructRecommendation(RecommendationType.NotUseful, messages);

  const admitInHospital = outputs.some(
    output => output.weight === outputWeight.red,
  );
  if (admitInHospital)
    return constructRecommendation(
      RecommendationType.AdmitInHospital,
      messages,
    );

  if (!_.isNumber(answerKeys.oxygenSaturation)) {
    messages = ['missingPulseOximeterReading'].concat(messages);
  }

  const yellows = numberOfYellows(form, answerKeys);

  if (yellows === 0) {
    return constructRecommendation(RecommendationType.ManageAtHome, messages);
  }
  if (yellows <= 3) {
    return constructRecommendation(RecommendationType.ReferToDoctor, messages);
  }
  return constructRecommendation(
    RecommendationType.ReferToDistrictHospital,
    messages,
  );
};

export {
  questions,
  visibleQuestions,
  questionAt,
  numberOfQuestions,
  nextQuestion,
  previousQuestion,
  questionWithKey,
  getRecommendation,
  indexOfQuestion,
  constructRecommendation,
};
