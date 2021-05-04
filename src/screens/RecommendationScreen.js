import React from 'react';
import Recommendation from '../components/Recommendation';

const RecommendationScreen = ({route, navigation}) => {
  return (
    <Recommendation
      data={route.params.recommendation}
      navigation={navigation}
    />
  );
};

export default RecommendationScreen;
