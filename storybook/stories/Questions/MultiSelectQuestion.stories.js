import {storiesOf} from '@storybook/react-native';
import React from 'react';
import SelectQuestion from '../../../src/components/questions/SelectQuestion';
import baseScreenDecorator from '../baseScreenDecorator';
import anyOfTheseSymptoms from '../../../src/domain/questions/child/anyOfTheseSymptoms';

storiesOf('MultiSelectQuestion', module)
  .add('basic view', () => (
    <SelectQuestion
      number={2}
      question={anyOfTheseSymptoms}
      selectedAnswers={['diabetes', 'hypertension']}
    />
  ))
  .addDecorator(baseScreenDecorator);
