import React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Home from './screens/Home';
import Questionnaire from './screens/Questionnaire';
import Recommendations from './screens/RecommendationScreen';
import DisclaimerScreen from './screens/DisclaimerScreen';
import LanguageSelectScreen from './screens/LanguageSelectionScreen';
import {t} from './messages';

const Stack = createStackNavigator();

const Route = (disclaimerAccepted, language) => (
  <Stack.Navigator
    initialRouteName={disclaimerAccepted ? 'Home' : 'Disclaimer'}>
    <Stack.Screen
      name="Disclaimer"
      component={DisclaimerScreen}
      options={{headerShown: false, title: t('disclaimer')}}
    />
    <Stack.Screen name="Home" options={{headerShown: false, title: t('home')}}>
      {props => <Home {...props} language={language} />}
    </Stack.Screen>
    <Stack.Screen name={'LanguageSelection'} options={{headerShown: false, title: t('languageSelection')}}>
      {props => <LanguageSelectScreen {...props} language={language} />}
    </Stack.Screen>
    <Stack.Screen name="Questionnaire" component={Questionnaire} options={{title: t('questionnaire')}}/>
    <Stack.Screen name="Recommendations" component={Recommendations} options={{title: t('recommendations')}}/>
  </Stack.Navigator>
);

export default Route;
