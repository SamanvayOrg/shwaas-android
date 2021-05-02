import {View} from 'react-native';
import {Caption, Headline, Subheading} from 'react-native-paper';
import messages from '../../domain/messages';
import React from 'react';
import Space from '../Space';

export default ({number, question, children}) => {
  return (
    <View>
      <Caption>Question {number}</Caption>
      <Headline>{messages[question.key]}</Headline>
      <Subheading>{messages[question.helpText]}</Subheading>
      <Space height={16}/>
      {children}
    </View>
  );
};