import React from 'react';
import {TextInput, Title} from 'react-native-paper';
import QuestionBase from './QuestionBase';
import messages from '../../messages';

export default ({number, question, value}) => {
  return (
    <QuestionBase number={number} question={question}>
      <Title>{value}</Title>
    </QuestionBase>
  );
};
