import React from 'react';
import {Title} from 'react-native-paper';
import {ScrollView} from 'react-native';
import QuestionBase from './QuestionBase';
import QuestionImage from './QuestionImage';

export default ({number, question, value}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <QuestionBase number={number} question={question} />
      <Title>{value}</Title>
      <QuestionImage image={question.commonImage} />
    </ScrollView>
  );
};
