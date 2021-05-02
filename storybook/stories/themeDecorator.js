import React from 'react';
import 'react-native-gesture-handler';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

//#2490EF
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2A4965',
  },
};

export default storyFn => (
  <PaperProvider theme={theme}>{storyFn()}</PaperProvider>
);
