import {connect} from 'react-redux';
import React, {useEffect} from 'react';
import {
  calculateRisk,
  indexOfQuestion,
  nextQuestion,
  previousQuestion,
  questionWithKey,
} from '../domain/questionModel';
import Question from '../components/questions/Question';
import {goToNextQuestion, goToPreviousQuestion, setValue,} from '../actions/form';
import BaseScreen from '../components/common/BaseScreen';
import {BackHandler, View} from 'react-native';
import PrevNextNavigator from '../components/PrevNextNavigator';
import questionTypes from '../domain/questionTypes';
import {useFocusEffect} from '@react-navigation/native';
import {outputWeight} from '../domain/questions/utils';

const Questionnaire = ({
                         form,
                         currentQuestionKey,
                         setValue,
                         goToNextQuestion,
                         goToPreviousQuestion,
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
    }, [form, currentQuestionKey])
  );

  useEffect(() => {
    const risk = calculateRisk(form);
    if (risk !== outputWeight.green || !nextQuestion(form, currentQuestionKey)) {
      navigation.navigate('Recommendations');
    }
  }, [navigation, currentQuestionKey]);

  const question = questionWithKey(currentQuestionKey);
  if (!question) {
    return null;
  }
  const value = form[question.key];

  const onAnswered = (question, value) => {
    setValue(question, value);
    if (question.type === questionTypes.boolean) {
      goToNextQuestion();
    }
  };

  return (
    <View style={{flex: 1}}>
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
          return nextQuestion(form, currentQuestionKey) ? goToNextQuestion() : navigation.navigate('Recommendations')
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
})(Questionnaire);
