import {storiesOf} from '@storybook/react-native';
import React from 'react';
import SelectQuestion from '../../../src/components/questions/SelectQuestion';
import baseScreenDecorator from '../baseScreenDecorator';
import questionTypes from '../../../src/domain/questionTypes/questionTypes';

storiesOf('SingleSelectQuestion', module)
  .add('basic view', () => (
    <SelectQuestion
      number={1}
      question={{
        key: 'pp2bs',
        type: questionTypes.singleChoice,
        helpText: 'directlyObserve',
        options: ['lessThan200', 'moreThan200', 'dontKnow'],
      }}
      value={['lessThan200']}
    />
  ))
  .addDecorator(baseScreenDecorator);
