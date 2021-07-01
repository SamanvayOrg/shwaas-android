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
  goToChosenQuestion,
  goToNextQuestion,
  goToPreviousQuestion,
  setValue,
} from '../actions/form';
import BaseScreen from '../components/common/BaseScreen';
import {BackHandler, View} from 'react-native';
import PrevNextNavigator from '../components/PrevNextNavigator';
import {useFocusEffect} from '@react-navigation/native';
import Breadcrumb from '../components/Breadcrumb';
import RecommendationType from '../domain/recommendations/recommendationType';
import ageTypes from '../domain/ageTypes';

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

  const goToNextQuestionIfNecessary = (question, value) => {
    const recommendation = getRecommendation(form, question, value);

    if (
      recommendation.type ===
        RecommendationType.AdmitInHospital(ageTypes.ageType(form)) ||
      recommendation.type ===
        RecommendationType.NotUseful(ageTypes.ageType(form))
    ) {
      navigation.navigate('Recommendations', {recommendation});
      return;
    }

    if (nextQuestion(form, currentQuestionKey, value)) {
      goToNextQuestion();
    } else {
      navigation.navigate('Recommendations', {recommendation});
    }
  };

  const question = questionWithKey(form, currentQuestionKey);
  if (!question) {
    return null;
  }

  useEffect(() => {
    if (question.type.isInformation) {
      setValue(question, question.value(form));
    }
  }, [currentQuestionKey]);

  const value = form[question.key];

  const onAnswered = (question, value) => {
    setValue(question, value);
    if (question.type.isBoolean || question.type.isSingleChoice) {
      goToNextQuestionIfNecessary(question, value);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fafafa'}}>
      <Breadcrumb
        form={form}
        currentIndex={indexOfQuestion(form, question)}
        onQuestionChange={goToChosenQuestion}
      />
      <BaseScreen style={{marginTop: 16}}>
        <Question
          number={indexOfQuestion(form, question) + 1}
          question={question}
          value={value}
          onAnswered={onAnswered}
        />
      </BaseScreen>
      <PrevNextNavigator
        onPrevious={goToPreviousQuestion}
        onNext={goToNextQuestionIfNecessary}
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
