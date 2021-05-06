import React from 'react';
import {View} from 'react-native';

export default ({style, children, ...props}) => (
  <View style={{...style, flex: 1, marginHorizontal: 16, backgroundColor: '#fafafa'}} {...props}>
    {children}
  </View>
);
