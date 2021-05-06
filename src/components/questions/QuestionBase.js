import {View} from 'react-native';
import {Caption, Headline, Subheading} from 'react-native-paper';
import {t} from '../../messages';
import React from 'react';
import Space from '../common/Space';

export default ({number, question, children}) => {
  const headline = `${t(question.key)} ${
    question.unit ? `(${question.unit})` : ''
  }`;
  return (
    <View>
      <Caption>
        {t('question')} {number}
      </Caption>
      <Headline>{headline}</Headline>
      {question.helpText && <Subheading>{t(question.helpText)}</Subheading>}
      <Space height={16} />
      {children}
    </View>
  );
};
