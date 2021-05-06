import {storiesOf} from '@storybook/react-native';
import React from 'react';
import BooleanQuestion from '../../../src/components/questions/BooleanQuestion';
import baseScreenDecorator from '../baseScreenDecorator';
import themeDecorator from '../themeDecorator';

storiesOf('Boolean Question', module)
  .addDecorator(themeDecorator)
  .addDecorator(baseScreenDecorator)
  .add('No selection', () => (
    <BooleanQuestion
      number={1}
      question={{
        key: 'hardToRecogniseRelatives',
        type: 'boolean',
        helpText: 'directlyObserve',
      }}
      onAnswered={() => {}}
    />
  ))
  .add('Selected Yes', () => (
    <BooleanQuestion
      number={1}
      question={{
        key: 'hardToRecogniseRelatives',
        type: 'boolean',
        helpText: 'directlyObserve',
      }}
      value={true}
      onAnswered={() => {}}
    />
  ));
