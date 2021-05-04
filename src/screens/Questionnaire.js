import {connect} from 'react-redux';
import React, {useEffect} from 'react';
import {
  getRecommendation,
  indexOfQuestion,
  nextQuestion,
  previousQuestion,
  questionWithKey,
} from '../domain/questionModel';
import Question from '../components/questions/Question';
import {
  goToNextQuestion,
  goToPreviousQuestion,
  setValue,
  goToChosenQuestion,
} from '../actions/form';
import BaseScreen from '../components/common/BaseScreen';
import {BackHandler, View} from 'react-native';
import PrevNextNavigator from '../components/PrevNextNavigator';
import questionTypes from '../domain/questionTypes';
import {useFocusEffect} from '@react-navigation/native';
import Breadcrumb from '../components/Breadcrumb';
import RecommendationType from '../domain/RecommendationType';

const Questionnaire = ({
  form,
  currentQuestionKey,
  setValue,
  goToNextQuestion,
  goToPreviousQuestion,
  goToChosenQuestion,
  navigation,
}) => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        const hasPreviousQuestion = previousQuestion(form, currentQuestionKey);

        if (hasPreviousQuestion) {
          goToPreviousQuestion();
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [form, currentQuestionKey]),
  );

  useEffect(() => {
    const recommendation = getRecommendation(form);
    if (recommendation === RecommendationType.AdmitInHospital || recommendation === RecommendationType.NotUseful) {
      navigation.navigate('Recommendations', {recommendation});
    }
  }, [navigation, currentQuestionKey]);

  const question = questionWithKey(currentQuestionKey);
  if (!question) {
    return null;
  }

  useEffect(() => {
    if (question.type === questionTypes.information) {
      setValue(question, question.value(form));
    }
  }, [currentQuestionKey]);

  const value = form[question.key];

  const onAnswered = (question, value) => {
    setValue(question, value);
    if (question.type === questionTypes.boolean) {
      goToNextQuestion();
    }
  };

  return (
    <View style={{flex: 1}}>
      <Breadcrumb
        form={form}
        currentIndex={indexOfQuestion(form, question)}
        onQuestionChange={goToChosenQuestion}
      />
      <BaseScreen>
        <Question
          number={indexOfQuestion(form, question) + 1}
          question={question}
          value={value}
          onAnswered={onAnswered}
        />
      </BaseScreen>
      <PrevNextNavigator
        onPrevious={goToPreviousQuestion}
        onNext={() => {
          let recommendation = getRecommendation(form);
          return nextQuestion(form, currentQuestionKey)
            ? goToNextQuestion()
            : navigation.navigate('Recommendations', {recommendation});
        }}
        firstPage={!previousQuestion(form, currentQuestionKey)}
        lastPage={false}
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
  goToChosenQuestion,
})(Questionnaire);
