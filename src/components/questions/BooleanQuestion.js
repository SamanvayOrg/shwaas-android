import React from 'react';
import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import {Text} from 'react-native-paper';
import HorizontalComponent from '../common/HorizontalComponent';
import QuestionBase from './QuestionBase';
import {outputColors} from '../../domain/questions/utils';

const styles = StyleSheet.create({
  square: {
    height: 120,
    width: 144,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    borderRadius: 16,
  },
  red: {
    backgroundColor: outputColors.red,
  },
  green: {
    backgroundColor: outputColors.green,
  },
  basicBox: {justifyContent: 'space-between', alignItems: 'center'},
  answerText: {color: 'white', fontSize: 24},
});

const YesNoButton = ({text, color, onPress, selected}) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={[styles.square, color, selected && {elevation: 8}]}>
      <Text style={[styles.answerText, selected && {fontSize: 48}]}>
        {text}
      </Text>
    </View>
  </TouchableNativeFeedback>
);

export default ({number, question, onAnswered = () => {}, value}) => {
  return (
    <QuestionBase number={number} question={question}>
      <HorizontalComponent style={styles.basicBox}>
        <YesNoButton
          text={'Yes'}
          color={styles.green}
          selected={value === true}
          onPress={() => onAnswered(question, true)}
        />
        <YesNoButton
          text={'No'}
          color={styles.red}
          selected={value === false}
          onPress={() => onAnswered(question, false)}
        />
      </HorizontalComponent>
    </QuestionBase>
  );
};
