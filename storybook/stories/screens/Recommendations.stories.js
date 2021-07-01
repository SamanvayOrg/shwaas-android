import {storiesOf} from '@storybook/react-native';
import React from 'react';
import themeDecorator from '../themeDecorator';
import RecommendationType from '../../../src/domain/recommendations/recommendationType';
import Recommendation from '../../../src/components/Recommendation';
import ageTypes from '../../../src/domain/ageTypes';

storiesOf('Recommendations', module)
  .addDecorator(themeDecorator)
  .add('not useful', () => (
    <Recommendation
      data={RecommendationType.NotUseful(ageTypes.ADULT)}
      form={{stoppedStandingWithoutSupport: 'no'}}
    />
  ))
  .add('manage at home', () => (
    <Recommendation data={RecommendationType.ManageAtHome(ageTypes.ADULT)} />
  ))
  .add('district hospital', () => (
    <Recommendation
      data={RecommendationType.ReferToDistrictHospital(ageTypes.ADULT)}
    />
  ))
  .add('refer to doctor', () => (
    <Recommendation data={RecommendationType.ReferToDoctor(ageTypes.ADULT)} />
  ))
  .add('admit in hospital', () => (
    <Recommendation data={RecommendationType.AdmitInHospital(ageTypes.ADULT)} />
  ));
