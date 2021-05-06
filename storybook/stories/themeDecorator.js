import React from 'react';
import 'react-native-gesture-handler';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import colors from '../../src/colors';

//#2490EF
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.background,
    accent: colors.accent,
  },
};

export default storyFn => (
  <PaperProvider theme={theme}>{storyFn()}</PaperProvider>
);
