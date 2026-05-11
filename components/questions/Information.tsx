import React from 'react';
import {Text} from 'react-native-paper';
import {ScrollView} from 'react-native';
import QuestionBase from './QuestionBase';
import QuestionImage from './QuestionImage';

export default ({number, question, value}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <QuestionBase number={number} question={question} />
      <Text variant="titleLarge">{value}</Text>
      <QuestionImage image={question.commonImage} />
    </ScrollView>
  );
};
