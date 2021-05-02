import {storiesOf} from '@storybook/react-native';
import React from 'react';
import BooleanQuestion from '../../../src/components/questions/BooleanQuestion';
import baseScreenDecorator from '../baseScreenDecorator';
import themeDecorator from '../themeDecorator';

storiesOf('BooleanQuestion', module)
  .addDecorator(themeDecorator)
  .addDecorator(baseScreenDecorator)
  .add('basic view', () => (
    <BooleanQuestion
      number={1}
      question={{
        key: 'hardToRecogniseRelatives',
        helpText: 'directlyObserve',
      }}
      onAnswered={() => {}}
    />
  ))
  .add('selected yes', () => (
    <BooleanQuestion
      number={1}
      question={{
        key: 'hardToRecogniseRelatives',
        helpText: 'directlyObserve',
      }}
      value={true}
      onAnswered={() => {}}
    />
  ));
