import React from 'react';
import codePush from 'react-native-code-push';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Routes from './src/Routes';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './src/reducers/rootReducer';

const theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
  },
};

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

// export default codePush(App);
export {default} from './storybook';
