import Analytics from 'appcenter-analytics';

const trackRecommendation = recommendation => {
  Analytics.trackEvent('Recommendation given', {
    recommendation: recommendation.nextSteps,
  });
};

export {trackRecommendation};
