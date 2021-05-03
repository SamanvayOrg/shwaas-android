import pneumoniaDetectionQuestions from './pneumoniaDetectionQuestions';

const questions = pneumoniaDetectionQuestions;

const visibleQuestions = form =>
  pneumoniaDetectionQuestions.filter(question => question.show(form) === true);

const questionAt = (index, form) => visibleQuestions(form)[index];

const numberOfQuestions = form => visibleQuestions(form).length;

export {questions, visibleQuestions, questionAt, numberOfQuestions};
