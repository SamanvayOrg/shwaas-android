import React from 'react';
import {TextInput} from 'react-native-paper';
import {ScrollView} from 'react-native';
import QuestionBase from './QuestionBase';
import {t} from '../../messages';
import Space from '../common/Space';
import QuestionImage from './QuestionImage';

export default ({number, question, onAnswered = () => {}, value}) => {
  const getYears = value => Math.floor(value / 12);
  const getMonths = value => Math.floor(value % 12);

  const onYearsChanged = val => {
    const years = parseInt(val) || 0;
    const months = getMonths(value) || 0;
    onAnswered(question, years * 12 + months);
  };

  const onMonthsChanged = val => {
    const years = getYears(value) || 0;
    const months = parseInt(val) || 0;
    onAnswered(question, years * 12 + months);
  };

  const toString = value => (value ? value.toString() : undefined);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <QuestionBase number={number} question={question} />
      <TextInput
        mode={'outlined'}
        keyboardType={'number-pad'}
        label={t('years')}
        placeholder={t('years')}
        value={toString(getYears(value))}
        onChangeText={onYearsChanged}
      />
      <Space height={16} />
      <TextInput
        mode={'outlined'}
        keyboardType={'number-pad'}
        label={t('months')}
        placeholder={t('months')}
        value={toString(getMonths(value))}
        onChangeText={onMonthsChanged}
      />
      <QuestionImage image={question.commonImage} />
    </ScrollView>
  );
};
