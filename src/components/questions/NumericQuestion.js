import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import QuestionBase from './QuestionBase';


export default ({number, question, onAnswered = () => {}, value}) => {
  return (
    <QuestionBase number={number} question={question}>
      <TextInput
        mode={'outlined'}
        keyboardType={'number-pad'}
        label=""
        value={value}
        onChangeText={onAnswered}
      />
    </QuestionBase>
  );
};
