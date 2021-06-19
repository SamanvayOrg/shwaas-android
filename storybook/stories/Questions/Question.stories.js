import {storiesOf} from '@storybook/react-native';
import React from 'react';
import baseScreenDecorator from '../baseScreenDecorator';
import themeDecorator from '../themeDecorator';
import Question from '../../../src/components/questions/Question';
import questionTypes from '../../../src/domain/questionTypes/questionTypes';

storiesOf('Question wrapper', module)
  .addDecorator(themeDecorator)
  .addDecorator(baseScreenDecorator)
  .add('wrapped boolean question', () => (
    <Question
      number={1}
      question={{
        key: 'hardToRecogniseRelatives',
        helpText: 'directlyObserve',
        type: questionTypes.boolean,
      }}
      onAnswered={() => {}}
    />
  ))
  .add('wrapped numeric question', () => (
    <Question
      number={1}
      question={{
        key: 'systolic',
        helpText: 'directlyObserve',
        type: questionTypes.numeric,
        unit: 'cm',
      }}
      value={true}
      onAnswered={() => {}}
    />
  ));
