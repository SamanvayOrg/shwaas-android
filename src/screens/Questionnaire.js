import {connect} from 'react-redux';
import React from 'react';
import {questionWithKey} from '../domain/questionStatus';
import Question from '../components/questions/Question';
import {setValue, goToNextQuestion} from '../actions/form';

const Questionnaire = ({
  form,
  currentQuestionKey,
  setValue,
  goToNextQuestion,
}) => {
  const question = questionWithKey(currentQuestionKey);
  const value = form[question.key];

  return (
    <Question
      number={1}
      question={question}
      value={value}
      onAnswered={setValue}
    />
  );
};

const mapStateToProps = ({form, currentQuestionKey}) => form;
export default connect(mapStateToProps, {setValue, goToNextQuestion})(
  Questionnaire,
);
