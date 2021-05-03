import {storiesOf} from '@storybook/react-native';
import React from 'react';
import baseScreenDecorator from '../baseScreenDecorator';
import TimerQuestion from '../../../src/components/questions/TimerQuestion';
import themeDecorator from '../themeDecorator';

storiesOf('TimerQuestion', module)
  .addDecorator(baseScreenDecorator)
  .addDecorator(themeDecorator)
  .add('basic view', () => (
    <TimerQuestion
      number={1}
      question={{key: 'sixMinuteWalkMessage', helpText: ''}}
    />
  ));
