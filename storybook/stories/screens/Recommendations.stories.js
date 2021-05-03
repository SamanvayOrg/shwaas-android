import {storiesOf} from '@storybook/react-native';
import React from 'react';
import baseScreenDecorator from '../baseScreenDecorator';
import themeDecorator from '../themeDecorator';
import Recommendations from '../../../src/screens/Recommendations';
import RecommendationType from '../../../src/domain/RecommendationType';

storiesOf('Recommendations', module)
  .addDecorator(baseScreenDecorator)
  .addDecorator(themeDecorator)
  .add('quarantine', () => (
    <Recommendations recommendation={RecommendationType.Quarantine}/>
  ))
  .add('not useful', () => (
    <Recommendations recommendation={RecommendationType.NotUseful}/>
  ));
