import {storiesOf} from '@storybook/react-native';
import React from 'react';
import baseScreenDecorator from '../baseScreenDecorator';
import NumericQuestion from '../../../src/components/questions/NumericQuestion';
import themeDecorator from '../themeDecorator';

storiesOf('NumericQuestion', module)
  .addDecorator(baseScreenDecorator)
  .addDecorator(themeDecorator)
  .add('basic view', () => (
    <NumericQuestion
      number={1}
      question={{key: 'hardToRecogniseRelatives', helpText: 'directlyObserve'}}
    />
  ));
