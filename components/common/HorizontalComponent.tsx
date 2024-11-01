import React from 'react';
import {View} from 'react-native';

export default ({style, children, ...props}) => (
  <View style={{...style, flexDirection: 'row'}} {...props}>
    {children}
  </View>
);
