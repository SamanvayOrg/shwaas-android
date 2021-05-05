import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import BasicDetails from './screens/BasicDetails';
import Questionnaire from './screens/Questionnaire';
import Recommendations from './screens/RecommendationScreen';
import DisclaimerScreen from './screens/DisclaimerScreen';
import LanguageSelectScreen from './screens/LanguageSelectionScreen';

const Stack = createStackNavigator();

const Route = (disclaimerAccepted, language) => (
  <Stack.Navigator
    initialRouteName={disclaimerAccepted ? 'Home' : 'Disclaimer'}>
    <Stack.Screen
      name="Disclaimer"
      component={DisclaimerScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    <Stack.Screen name={'LanguageSelection'} options={{headerShown: false}}>
      {props => <LanguageSelectScreen {...props} language={language} />}
    </Stack.Screen>
    <Stack.Screen name="BasicDetails" component={BasicDetails} />
    <Stack.Screen name="Questionnaire" component={Questionnaire} />
    <Stack.Screen name="Recommendations" component={Recommendations} />
  </Stack.Navigator>
);

export default Route;
