import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import BasicDetails from './screens/BasicDetails';

const Stack = createStackNavigator();

const Route = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    <Stack.Screen name="BasicDetails" component={BasicDetails} />
  </Stack.Navigator>
);

export default Route;
