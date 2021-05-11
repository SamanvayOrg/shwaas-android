import {storiesOf} from '@storybook/react-native';
import React from 'react';
import themeDecorator from '../themeDecorator';
import RecommendationType from '../../../src/domain/RecommendationType';
import Recommendation from '../../../src/components/Recommendation';

storiesOf('Recommendations', module)
  .addDecorator(themeDecorator)
  .add('not useful', () => (
    <Recommendation data={RecommendationType.NotUseful} form={{stoppedStandingWithoutSupport: 'no'}}/>
  ))
  .add('manage at home', () => (
    <Recommendation data={RecommendationType.ManageAtHome} />
  ))
  .add('district hospital', () => (
    <Recommendation data={RecommendationType.ReferToDistrictHospital} />
  ))
  .add('refer to doctor', () => (
    <Recommendation data={RecommendationType.ReferToDoctor} />
  ))
  .add('admit in hospital', () => (
    <Recommendation data={RecommendationType.AdmitInHospital} />
  ));
