import React from 'react';
import {Text, View, Button} from 'react-native';

export default ({navigation}) => (
  <View>
    <Text>Hello world</Text>
    <Button title={'Get started'} onPress={() => {navigation.navigate('BasicDetails')}}></Button>
  </View>
);
