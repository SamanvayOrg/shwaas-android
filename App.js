import React from 'react';
import codePush from 'react-native-code-push';
import {NavigationContainer} from '@react-navigation/native';

import 'react-native-gesture-handler';
import Routes from './src/screens/Routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default codePush(App);
