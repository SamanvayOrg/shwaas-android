import {storiesOf} from '@storybook/react-native';
import React from 'react';
import BooleanQuestion from '../../../src/components/questions/BooleanQuestion';

storiesOf('BooleanQuestion', module).add('basic view', () => (
  <BooleanQuestion />
));
