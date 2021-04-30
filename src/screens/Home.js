import React from 'react';
import {Button} from 'react-native-paper';
import BaseScreen from '../components/BaseScreen';

export default ({navigation}) => (
  <BaseScreen style={{justifyContent: 'center', alignItems: 'center'}}>
    <Button
      mode={'contained'}
      onPress={() => {
        navigation.navigate('BasicDetails');
      }}>
      Get started
    </Button>
  </BaseScreen>
);
