import React, {Component} from 'react';
import codePush from 'react-native-code-push';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Routes from './src/Routes';
import {
  ActivityIndicator,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './src/reducers/rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';

const theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2A4965',
  },
};

const store = createStore(rootReducer);

const isDisclaimerAccepted = async () => {
  const accepted = await AsyncStorage.getItem('disclaimerAccepted');
  console.log('isDisclaimerAccepted', accepted);
  return accepted !== null && accepted === 'true';
};

class App extends Component {
  constructor(props: P, context: any) {
    super(props, context);
    this.state = {disclaimerAccepted: null};
  }

  render() {
    if (_.isNil(this.state.disclaimerAccepted)) {
      isDisclaimerAccepted()
        .then(value => {
          this.setState({disclaimerAccepted: value});
        })
        .catch(error => this.setState({disclaimerAccepted: false}));
      return <ActivityIndicator />;
    }

    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            {Routes(this.state.disclaimerAccepted)}
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    );
  }
}

export default codePush(App);
// export {default} from './storybook';
