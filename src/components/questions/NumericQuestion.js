import React from 'react';
import {TextInput} from 'react-native-paper';
import QuestionBase from './QuestionBase';
import messages from '../../domain/messages';

export default ({number, question, onAnswered = () => {}, value}) => {
  return (
    <QuestionBase number={number} question={question}>
      <TextInput
        mode={'outlined'}
        keyboardType={'number-pad'}
        label=""
        placeholder={messages.get(question.unit)}
        value={value}
        onChangeText={value => onAnswered(question, parseInt(value))}
      />
    </QuestionBase>
  );
};
