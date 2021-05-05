import React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Home from './screens/Home';
import Questionnaire from './screens/Questionnaire';
import Recommendations from './screens/RecommendationScreen';
import DisclaimerScreen from './screens/DisclaimerScreen';
import LanguageSelection from './screens/LanguageSelectionScreen';
import {t} from './messages';

const Stack = createStackNavigator();

const Route = localState => (
  <Stack.Navigator
    initialRouteName={localState.disclaimerAccepted ? 'Home' : 'Disclaimer'}>
    <Stack.Screen
      name="Disclaimer"
      component={DisclaimerScreen}
      options={{headerShown: false, title: t('disclaimer')}}
    />
    <Stack.Screen
      name="Home"
      component={Home}
      options={{headerShown: false}}
      initialParams={{localState: localState}}
    />
    <Stack.Screen
      name="Language"
      component={LanguageSelection}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Questionnaire" component={Questionnaire} />
    <Stack.Screen name="Recommendations" component={Recommendations} />
  </Stack.Navigator>
);

export default Route;
