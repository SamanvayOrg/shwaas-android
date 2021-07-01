import {storiesOf} from '@storybook/react-native';
import React from 'react';
import themeDecorator from '../themeDecorator';
import baseScreenDecorator from '../baseScreenDecorator';
import Answers from '../../../src/components/Answers';

storiesOf('Answers', module)
  .addDecorator(themeDecorator)
  .addDecorator(baseScreenDecorator)
  .add('not useful', () => (
    <Answers
      form={{
        feverInPast14Days: true,
        whenDidSymptomsStart: 13,
        comorbidities: ['lungDisease', 'sickleCellDisease'],
        sickleDiseaseStatus: 'symptomsPresent',
      }}
    />
  ));
