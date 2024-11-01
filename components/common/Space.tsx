import React from 'react';
import {View} from 'react-native';

export default ({style, height = 24, ...props}) => (
  <View style={{...style, height}} {...props} />
);
