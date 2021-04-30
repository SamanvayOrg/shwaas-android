import React from 'react';
import codePush from 'react-native-code-push';
import {NavigationContainer} from '@react-navigation/native';

import 'react-native-gesture-handler';
import Routes from './src/screens/Routes';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default codePush(App);
