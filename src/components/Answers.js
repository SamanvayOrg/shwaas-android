import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {t} from '../messages';
import React, {useState} from 'react';
import {getAnswerString, visibleQuestions} from '../domain/questionModel';
import _ from 'lodash';
import colors from '../colors';

export default ({form = {}}) => {
  const [showAnswers, setShowAnswers] = useState(true);

  const questions = visibleQuestions(form);
  const answers = _.reduce(
    questions,
    (result, question) => {
      if (question.type.isInformation) {
        result.push({
          question: t(question.key),
          value: question.value(form),
          output: question.output(form).weight,
        });
        return result;
      }
      const value = form[question.key];
      if (!_.isNil(value)) {
        result.push({
          question: t(question.key),
          value: getAnswerString(question, value),
          output: question.output(form).weight,
        });
      }
      return result;
    },
    [],
  );

  return (
    <View
      style={{
        marginHorizontal: 8,
        marginVertical: 16,
        padding: 15,
        backgroundColor: '#EEF0F2',
        elevation: 2,
        borderRadius: 8,
      }}>
      <Text style={{textAlign: 'center', fontSize: 32}}>{t('answers')}</Text>
      {answers.map(answer => {
        return (
          <View
            key={answer.question}
            style={{flexDirection: 'row', marginVertical: 8}}>
            <View style={{width: 48}}>
              <View
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  backgroundColor: colors[answer.output],
                }}
              />
            </View>
            <View style={{minHeight: 24, flex: 1}}>
              <Text style={{fontSize: 18, color: colors.primary}}>
                {answer.question}
              </Text>
              <Text style={{fontSize: 18, color: colors.accent}}>
                {answer.value}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};
