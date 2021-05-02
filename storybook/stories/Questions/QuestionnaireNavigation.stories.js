import {storiesOf} from '@storybook/react-native';
import React from 'react';
import themeDecorator from '../themeDecorator';
import QuestionnaireNavigation from '../../../src/components/questions/QuestionnaireNavigation';
import {View} from 'react-native';

storiesOf('Questionnaire Navigation', module)
  .addDecorator(themeDecorator)
  .add('basic view', () => <QuestionnaireNavigation />)
  .add('first page', () => <QuestionnaireNavigation firstPage={true} />)
  .add('last page', () => <QuestionnaireNavigation lastPage={true} />)
  .add('on bottom of screen', () => {
    return (
      <View style={{justifyContent: 'flex-end', flex: 1}}>
        <QuestionnaireNavigation />
      </View>
    );
  });
