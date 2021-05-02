import React from 'react';
import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import {Text} from 'react-native-paper';
import HorizontalComponent from '../HorizontalComponent';
import QuestionBase from './QuestionBase';

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
    backgroundColor: '#E24C4C',
  },
  green: {
    backgroundColor: '#38A160',
  },
  basicBox: {justifyContent: 'space-between', alignItems: 'center'},
  answerText: {color: 'white', fontSize: 32},
});

const YesNoButton = ({text, color, onPress}) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={[styles.square, color]}>
      <Text style={styles.answerText}>{text}</Text>
    </View>
  </TouchableNativeFeedback>
);

export default ({number, question, onAnswered = () => {}}) => {
  return (
    <QuestionBase number={number} question={question}>
      <HorizontalComponent style={styles.basicBox}>
        <YesNoButton
          text={'Yes'}
          color={styles.green}
          onPress={() => onAnswered(true)}
        />
        <YesNoButton
          text={'No'}
          color={styles.red}
          onPress={() => onAnswered(false)}
        />
      </HorizontalComponent>
    </QuestionBase>
  );
};
