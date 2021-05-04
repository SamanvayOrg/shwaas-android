import React from 'react';
import Recommendation from '../components/Recommendation';

const RecommendationScreen = ({route}) => {
  return (
    <Recommendation
      data={route.params.recommendation}
    />
  );
};

export default RecommendationScreen;
