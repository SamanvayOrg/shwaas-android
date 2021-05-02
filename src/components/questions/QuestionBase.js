import {View} from 'react-native';
import {Caption, Headline, Subheading} from 'react-native-paper';
import messages from '../../domain/messages';
import React from 'react';

export default ({number, question, children}) => {
  return (
    <View>
      <Caption>Question {number}</Caption>
      <Headline>{messages[question.key]}</Headline>
      <Subheading>{messages[question.helpText]}</Subheading>
      {children}
    </View>
  );
};
