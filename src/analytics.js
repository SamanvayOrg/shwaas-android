import Analytics from 'appcenter-analytics';

const trackRecommendation = recommendation => {
  if (__DEV__) return;

  Analytics.trackEvent('Recommendation given', {
    recommendation: recommendation.nextSteps,
  });
};

export {trackRecommendation};
