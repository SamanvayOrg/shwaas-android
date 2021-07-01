import commonQuestions from './questions/common/commonQuestions';
import adultQuestions from './questions/adult/adultQuestions';
import childQuestions from './questions/child/childQuestions';
import {outputWeight} from './questions/utils';
import RecommendationType from './recommendations/recommendationType';
import comorbidities from './questions/adult/comorbidities';
import fbs from './questions/adult/fbs';
import pp2bs from './questions/adult/pp2bs';
import rbs from './questions/adult/rbs';
import hba1c from './questions/adult/hba1c';
import _ from 'lodash';
import {validate} from './validation';
import ageTypes from './ageTypes';

validate([...commonQuestions, ...adultQuestions]);
validate([...commonQuestions, ...childQuestions]);

const questionsInFlow = (form = {}) => {
  return form.age && form.age > 12 * 12
    ? [...commonQuestions, ...adultQuestions]
    : [...commonQuestions, ...childQuestions];
};

const visibleQuestions = (form = {}) =>
  questionsInFlow(form).filter(question => question.show(form) === true);

const getAnswerString = (question, value) =>
  question.type.getAnswerString(question, value);

const keysOfVisibleQuestions = form => {
  const visibleQuestionKeys = visibleQuestions(form).map(q => q.key);
  return Object.keys(form).filter(key => visibleQuestionKeys.includes(key));
};

const removeAnswersNotInQuestionList = form => {
  const visibleQuestionsKeys = keysOfVisibleQuestions(form);
  return visibleQuestionsKeys.reduce((result, key) => {
    result[key] = form[key];
    return result;
  }, {});
};

const nextQuestion = (originalForm, questionKey, currentAnswer) => {
  let form = {
    ...originalForm,
  };
  if (currentAnswer) {
    form[questionKey] = currentAnswer;
  }

  let visibleQs = visibleQuestions(form);
  if (!questionKey) {
    return visibleQs[0];
  }

  const indexOfCurrentQuestion = visibleQs.findIndex(
    q => q.key === questionKey,
  );
  if (indexOfCurrentQuestion === questionsInFlow(form).length - 1) {
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

const questionWithKey = (form, key) =>
  visibleQuestions(form).find(question => question.key === key);

const numberOfYellows = (form, answerKeys) => {
  const irrelevantQuestionKeys = [fbs, pp2bs, rbs, hba1c].map(
    question => question.key,
  );

  const questions = visibleQuestions(form);

  const relevantQuestionKeys = questions
    .filter(question => !irrelevantQuestionKeys.includes(question.key))
    .map(question => question.key);

  let yellowQuestions = answerKeys.filter(
    answerKey =>
      questionWithKey(form, answerKey).output(form).weight ===
      outputWeight.yellow,
  );

  const relevantYellowQuestions = yellowQuestions.filter(question =>
    relevantQuestionKeys.includes(question),
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

const constructRecommendation = (type, messages) => ({type, messages});

const getRecommendation = (answers, additionalQuestion, answer) => {
  const form = {
    ...answers,
  };
  if (additionalQuestion) {
    form[additionalQuestion.key] = answer;
  }

  const answerKeys = keysOfVisibleQuestions(form);
  const outputs = answerKeys.map(answerKey =>
    questionWithKey(answers, answerKey).output(form),
  );
  let messages = outputs.map(output => output.message);

  const notUseful = outputs.some(
    output => output.weight === outputWeight.black,
  );
  if (notUseful) {
    return constructRecommendation(
      RecommendationType.NotUseful(ageTypes.ageType(form)),
      messages,
    );
  }

  const admitInHospital = outputs.some(
    output => output.weight === outputWeight.red,
  );
  if (admitInHospital)
    return constructRecommendation(
      RecommendationType.AdmitInHospital(ageTypes.ageType(form)),
      messages,
    );

  if (!_.isNumber(answerKeys.oxygenSaturation)) {
    messages = ['missingPulseOximeterReading'].concat(messages);
  }

  const yellows = numberOfYellows(form, answerKeys);

  if (yellows === 0) {
    return constructRecommendation(
      RecommendationType.ManageAtHome(ageTypes.ageType(form)),
      messages,
    );
  }
  if (yellows <= 3) {
    return constructRecommendation(
      RecommendationType.ReferToDoctor(ageTypes.ageType(form)),
      messages,
    );
  }
  return constructRecommendation(
    RecommendationType.ReferToDistrictHospital(ageTypes.ageType(form)),
    messages,
  );
};

export {
  visibleQuestions,
  questionAt,
  numberOfQuestions,
  nextQuestion,
  previousQuestion,
  questionWithKey,
  getRecommendation,
  indexOfQuestion,
  constructRecommendation,
  getAnswerString,
  removeAnswersNotInQuestionList,
};
