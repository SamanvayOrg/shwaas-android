import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import BasicDetails from './BasicDetails';
import {Appbar} from 'react-native-paper';

function CustomNavigationBar({navigation, previous}) {
  console.log(navigation.state);
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack}/> : null}
      <Appbar.Content title="Pneumonia App"/>
    </Appbar.Header>
  );
}

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Home">
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="BasicDetails" component={BasicDetails}/>
  </Stack.Navigator>
);
