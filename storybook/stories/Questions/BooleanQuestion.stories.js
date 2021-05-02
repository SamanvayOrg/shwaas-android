import {storiesOf} from '@storybook/react-native';
import React from 'react';
import BooleanQuestion from '../../../src/components/questions/BooleanQuestion';
import baseScreenDecorator from '../baseScreenDecorator';

storiesOf('BooleanQuestion', module)
  .add('basic view', () => (
    <BooleanQuestion
      number={1}
      question={{key: 'hardToRecogniseRelatives', helpText: 'directlyObserve'}}
    />
  ))
  .addDecorator(baseScreenDecorator);
