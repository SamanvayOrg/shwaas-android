import React from 'react';
import Recommendation from '../components/Recommendation';
import RecommendationType from '../domain/RecommendationType';

const RecommendationScreen = ({route}) => {
  return (
    <Recommendation
      data={RecommendationType.getRecommendationType(route.params.risk)}
    />
  );
};

export default RecommendationScreen;
