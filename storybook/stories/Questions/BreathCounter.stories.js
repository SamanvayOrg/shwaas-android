import {storiesOf} from '@storybook/react-native';
import React from 'react';
import BreathCounterQuestion from '../../../src/components/questions/BreathCounterQuestion';
import baseScreenDecorator from '../baseScreenDecorator';
import themeDecorator from '../themeDecorator';

storiesOf('Breath Counter Question', module)
    .addDecorator(themeDecorator)
    .addDecorator(baseScreenDecorator)
    .add('Basic view', () => (
        <BreathCounterQuestion
            number={1}
            question={{
                key: 'breathCount'
            }}
            onAnswered={() => {}}
        />
    ));

