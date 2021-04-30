import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import BasicDetails from './BasicDetails';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="BasicDetails" component={BasicDetails} />
  </Stack.Navigator>
);
