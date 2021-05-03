import {storiesOf} from '@storybook/react-native';
import React from 'react';
import SelectQuestion from '../../../src/components/questions/SelectQuestion';
import baseScreenDecorator from '../baseScreenDecorator';

storiesOf('MultiSelectQuestion', module)
  .add('basic view', () => (
    <SelectQuestion
      number={2}
      question={{
        key: 'comorbidities',
        helpText: 'directlyObserve',
        options: [
          'diabetes',
          'hypertension',
          'heartDisease',
          'asthma',
          'lungDisease',
          'sickleCellDisease',
          'liverDisease',
          'kidneyDisease',
          'pregnancy',
          'obesity',
          'anemia',
          'hiv',
          'cancer',
          'none',
        ],
      }}
      selectedAnswers={['diabetes', 'hypertension']}
    />
  ))
  .addDecorator(baseScreenDecorator);
