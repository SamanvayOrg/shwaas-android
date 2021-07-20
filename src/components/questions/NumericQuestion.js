import React from 'react';
import {TextInput} from 'react-native-paper';
import QuestionBase from './QuestionBase';
import {t} from '../../messages';
import {ScrollView} from 'react-native';
import QuestionImage from './QuestionImage';

export default ({number, question, onAnswered = () => {}, value}) => {
  const onChangeText = (question, value) => {
    return value.match(/\.[0]*$/) === null
      ? onAnswered(question, parseFloat(value))
      : onAnswered(question, value);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <QuestionBase number={number} question={question} />
      <TextInput
        mode={'outlined'}
        keyboardType={'number-pad'}
        label=""
        placeholder={t(question.unit)}
        value={value ? value.toString() : undefined}
        onChangeText={value => onChangeText(question, value)}
      />
      <QuestionImage image={question.commonImage} />
    </ScrollView>
  );
};
