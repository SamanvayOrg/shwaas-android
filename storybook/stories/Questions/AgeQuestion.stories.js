import {storiesOf} from '@storybook/react-native';
import React from 'react';
import baseScreenDecorator from '../baseScreenDecorator';
import themeDecorator from '../themeDecorator';
import AgeQuestion from '../../../src/components/questions/AgeQuestion';
import age from '../../../src/domain/questions/common/age';

storiesOf('Age Question', module)
  .addDecorator(baseScreenDecorator)
  .addDecorator(themeDecorator)
  .add('Without value', () => <AgeQuestion number={1} question={age} />)
  .add('With value', () => (
    <AgeQuestion number={1} question={age} value={33} />
  ));
