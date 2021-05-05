import React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Home from './screens/Home';
import Questionnaire from './screens/Questionnaire';
import Recommendations from './screens/RecommendationScreen';
import DisclaimerScreen from './screens/DisclaimerScreen';
import LanguageSelection from './screens/LanguageSelectionScreen';
import {t} from './messages';
import NavigatorUtil from './NavigatorUtil';

const Stack = createStackNavigator();

const Route = localState => (
  <Stack.Navigator initialRouteName={'Home'}>
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
    <Stack.Screen
      name="Questionnaire"
      component={Questionnaire}
      options={({navigation}) => ({
        headerLeft: props => {
          return (
            <HeaderBackButton
              {...props}
              onPress={() => {
                NavigatorUtil.goToHome(navigation);
              }}
            />
          );
        },
      })}
    />
    <Stack.Screen name="Recommendations" component={Recommendations} />
  </Stack.Navigator>
);

export default Route;
