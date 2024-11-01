import {View} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';
import Space from '../common/Space';
import {useTranslation} from 'react-i18next';

export default ({number, question, children}) => {
    const { t } = useTranslation();
  const headline = `${t(question.label)} ${
    question.unit ? `(${question.unit})` : ''
  }`;
  return (
    <View>
      <Text style={{color: '#74808B', fontSize: 16}}>
        {t('question')} {number}
      </Text>
      <Text style={{color: '#192734', fontSize: 28, fontWeight: '700'}}>
        {headline}
      </Text>
      {question.helpText && (
        <Text style={{color: '#74808B', fontWeight: '400', fontSize: 14}}>
          {t(question.helpText)}
        </Text>
      )}
      <Space height={16} />
      {children}
    </View>
  );
};
