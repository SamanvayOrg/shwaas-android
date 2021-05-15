import React from 'react';
import {WebView} from 'react-native';

export default () => (
  <WebView
    source={{
      uri: 'https://shwaas.samanvayfoundation.org/terms',
    }}
    style={{marginTop: 20}}
  />
);
