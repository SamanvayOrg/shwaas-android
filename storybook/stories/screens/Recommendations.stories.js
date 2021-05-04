import {storiesOf} from '@storybook/react-native';
import React from 'react';
import baseScreenDecorator from '../baseScreenDecorator';
import themeDecorator from '../themeDecorator';
import RecommendationType from '../../../src/domain/RecommendationType';
import Recommendation from '../../../src/components/Recommendation';

storiesOf('Recommendations', module)
  .addDecorator(baseScreenDecorator)
  .addDecorator(themeDecorator)
  .add('quarantine', () => (
    <Recommendation data={RecommendationType.ReferToDistrictHospital} />
  ))
  .add('not useful', () => (
    <Recommendation data={RecommendationType.NotUseful} />
  ))
  .add('manage at home', () => (
    <Recommendation data={RecommendationType.ManageAtHome} />
  ));
