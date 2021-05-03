import React from 'react';
import 'react-native-gesture-handler';
import BaseScreen from '../../src/components/common/BaseScreen';

export default storyFn => <BaseScreen>{storyFn()}</BaseScreen>;
