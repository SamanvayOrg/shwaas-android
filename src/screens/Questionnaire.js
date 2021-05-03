import {connect} from 'react-redux';
import React from 'react';
import {
  nextQuestion,
  previousQuestion,
  questionWithKey,
} from '../domain/questionStatus';
import Question from '../components/questions/Question';
import {
  setValue,
  goToNextQuestion,
  goToPreviousQuestion,
} from '../actions/form';
import BaseScreen from '../components/common/BaseScreen';
import {ScrollView} from 'react-native';
import PrevNextNavigator from '../components/PrevNextNavigator';
import {View} from 'react-native';

const Questionnaire = ({
  form,
  currentQuestionKey,
  setValue,
  goToNextQuestion,
  goToPreviousQuestion,
}) => {
  const question = questionWithKey(currentQuestionKey);
  if (!question) {
    return null;
  }

  const value = form[question.key];
  return (
    <View style={{flex: 1}}>
      <BaseScreen>
        <Question
          number={1}
          question={question}
          value={value}
          onAnswered={setValue}
        />
      </BaseScreen>
      <PrevNextNavigator
        onPrevious={goToPreviousQuestion}
        onNext={goToNextQuestion}
        firstPage={!previousQuestion(form, currentQuestionKey)}
        lastPage={!nextQuestion(form, currentQuestionKey)}
      />
    </View>
  );
};

const mapStateToProps = ({form: {form, currentQuestionKey}}) => ({
  form,
  currentQuestionKey,
});
export default connect(mapStateToProps, {
  setValue,
  goToNextQuestion,
  goToPreviousQuestion,
})(Questionnaire);
