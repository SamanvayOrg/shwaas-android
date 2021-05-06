import React from 'react';
import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import {Surface, Text} from 'react-native-paper';
import HorizontalComponent from '../common/HorizontalComponent';
import QuestionBase from './QuestionBase';
import {t} from '../../messages';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  square: {
    flexDirection: 'row',
    height: 120,
    width: 144,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 24,
    borderRadius: 16,
  },
  red: {
    backgroundColor: '#74808B',
  },
  green: {
    backgroundColor: '#74808B',
  },
  basicBox: {justifyContent: 'space-between', alignItems: 'center'},
  answerText: {color: 'white', fontSize: 24},
});

const YesNoButton = ({text, color, onPress, selected, iconName}) => (
  <TouchableNativeFeedback onPress={onPress}>
    <Surface
      style={[
        styles.square,
        color,
        selected && {elevation: 8, backgroundColor: '#2490EF'},
      ]}>
      <Text style={[styles.answerText, selected && {fontSize: 48}]}>
        {text}
      </Text>
      <Icon name={iconName} size={selected ? 48 : 24} color={'white'} />
    </Surface>
  </TouchableNativeFeedback>
);

export default ({number, question, onAnswered = () => {}, value}) => {
  return (
    <QuestionBase number={number} question={question}>
      <HorizontalComponent style={styles.basicBox}>
        <YesNoButton
          text={t('yes')}
          color={styles.green}
          selected={value === true}
          onPress={() => onAnswered(question, true)}
          iconName={'thumbs-up'}
        />
        <YesNoButton
          text={t('no')}
          color={styles.red}
          selected={value === false}
          onPress={() => onAnswered(question, false)}
          iconName={'thumbs-down'}
        />
      </HorizontalComponent>
    </QuestionBase>
  );
};
