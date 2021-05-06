import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {t} from '../../messages';
import React from 'react';
import Space from '../common/Space';

export default ({number, question, children}) => {
  const headline = `${t(question.key)} ${
    question.unit ? `(${question.unit})` : ''
  }`;
  return (
    <View>
      <Text style={{color: '#74808B', fontSize: 16}}>
        {t('question')} {number}
      </Text>
      <Text style={{color: '#192734', fontSize: 28, fontWeight: '700'}}>{headline}</Text>
      {question.helpText && <Text style={{color: '#74808B', fontWeight: '400', fontSize: 14}}>{t(question.helpText)}</Text>}
      <Space height={16} />
      {children}
    </View>
  );
};
