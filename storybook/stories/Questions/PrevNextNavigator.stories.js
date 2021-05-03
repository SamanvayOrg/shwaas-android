import {storiesOf} from '@storybook/react-native';
import React from 'react';
import themeDecorator from '../themeDecorator';
import PrevNextNavigator from '../../../src/components/PrevNextNavigator';
import {View} from 'react-native';

storiesOf('Navigator', module)
  .addDecorator(themeDecorator)
  .add('basic view', () => <PrevNextNavigator />)
  .add('first page', () => <PrevNextNavigator firstPage={true} />)
  .add('last page', () => <PrevNextNavigator lastPage={true} />)
  .add('on bottom of screen', () => {
    return (
      <View style={{justifyContent: 'flex-end', flex: 1}}>
        <PrevNextNavigator />
      </View>
    );
  });
