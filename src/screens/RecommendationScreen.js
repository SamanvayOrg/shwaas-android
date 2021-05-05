import React, {useCallback} from 'react';
import Recommendation from '../components/Recommendation';
import {useFocusEffect} from '@react-navigation/native';
import {trackRecommendation} from '../analytics';

const RecommendationScreen = ({route, navigation}) => {
  useFocusEffect(
    useCallback(() => {
      trackRecommendation(route.params.recommendation);
      return () => {};
    }, [route]),
  );

  return (
    <Recommendation
      data={route.params.recommendation}
      navigation={navigation}
    />
  );
};

export default RecommendationScreen;
