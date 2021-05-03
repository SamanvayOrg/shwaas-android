import {storiesOf} from '@storybook/react-native';
import React from 'react';
import baseScreenDecorator from '../baseScreenDecorator';
import NumericQuestion from '../../../src/components/questions/NumericQuestion';
import themeDecorator from '../themeDecorator';

storiesOf('Numeric Question', module)
  .addDecorator(baseScreenDecorator)
  .addDecorator(themeDecorator)
  .add('With everything', () => (
    <NumericQuestion
      number={1}
      question={{
        key: 'systolic',
        helpText: 'directlyObserve',
        unit: 'cm',
      }}
    />
  ))
  .add('Without unit and help text', () => (
    <NumericQuestion
      number={1}
      question={{
        key: 'systolic',
      }}
    />
  ));
