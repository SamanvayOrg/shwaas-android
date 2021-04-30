import React from 'react';
import {View} from 'react-native';

export default ({style, children}) => (
  <View style={{...style, flex: 1}}>{children}</View>
);
