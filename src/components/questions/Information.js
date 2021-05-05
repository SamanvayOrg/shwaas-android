import React from 'react';
import {Title} from 'react-native-paper';
import QuestionBase from './QuestionBase';

export default ({number, question, value}) => {
  return (
    <QuestionBase number={number} question={question}>
      <Title>{value}</Title>
    </QuestionBase>
  );
};
