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
import _ from 'lodash';
import LocalStorage from './src/LocalStorage';
import messages, {changeLanguage} from './src/messages';

const theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2A4965',
  },
};

const store = createStore(rootReducer);

class App extends Component {
  constructor(props: P, context: any) {
    super(props, context);
    this.state = {localState: null};
  }

  render() {
    if (_.isNil(this.state.localState)) {
      LocalStorage.getLocalState()
        .then(localState => {
          if (
            !_.isNil(localState.languageSelected) &&
            !_.isEmpty(localState.languageSelected)
          )
            changeLanguage(localState.languageSelected);
          this.setState({localState: localState});
        })
        .catch(error => this.setState({localState: null}));
      return <ActivityIndicator />;
    }

    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            {Routes(this.state.localState)}
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    );
  }
}

let app = __DEV__ ? App : codePush(App);
export default app;
// export {default} from './storybook';
