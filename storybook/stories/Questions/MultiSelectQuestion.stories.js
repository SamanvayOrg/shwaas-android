import {storiesOf} from '@storybook/react-native';
import React from 'react';
import SelectQuestion from '../../../src/components/questions/SelectQuestion';
import baseScreenDecorator from '../baseScreenDecorator';

storiesOf('MultiSelect Question', module)
  .add('With Selection', () => (
    <SelectQuestion
      number={2}
      question={{
        key: 'comorbidities',
        helpText: 'directlyObserve',
        options: ['diabetes', 'hypertension', 'heartDisease', 'none'],
      }}
      value={['diabetes', 'hypertension']}
    />
  ))
  .addDecorator(baseScreenDecorator);
