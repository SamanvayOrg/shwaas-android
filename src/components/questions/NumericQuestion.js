import React from 'react';
import {TextInput} from 'react-native-paper';
import QuestionBase from './QuestionBase';
import {t} from '../../messages';

export default ({number, question, onAnswered = () => {}, value}) => {
  return (
    <QuestionBase number={number} question={question}>
      <TextInput
        mode={'outlined'}
        keyboardType={'number-pad'}
        label=""
        placeholder={t(question.unit)}
        value={value ? value.toString() : undefined}
        onChangeText={value => onAnswered(question, parseInt(value))}
      />
    </QuestionBase>
  );
};
