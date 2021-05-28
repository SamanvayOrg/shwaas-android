import Analytics from 'appcenter-analytics';
import {getLanguage} from './messages';

const trackRecommendation = recommendation => {
  if (__DEV__) return;

  Analytics.trackEvent('Recommendation given', {
    recommendation: recommendation.nextSteps,
    language: getLanguage(),
  });
};

export {trackRecommendation};
