import React, {useCallback} from 'react';
import Recommendation from '../components/Recommendation';
import {useFocusEffect} from '@react-navigation/native';
import {trackRecommendation} from '../analytics';
import {resetCalculator} from '../actions/form';
import {connect} from 'react-redux';

const RecommendationScreen = ({route, navigation, resetCalculator, form}) => {
  useFocusEffect(
    useCallback(() => {
      trackRecommendation(route.params.recommendation.type);
      return () => {};
    }, [route]),
  );
  const {type, messages} = route.params.recommendation;

  return (
    <Recommendation
      data={type}
      messages={messages}
      navigation={navigation}
      onStartOver={resetCalculator}
      form={form}
    />
  );
};

const mapStateToProps = ({form: {form}}) => ({form});
export default connect(mapStateToProps, {resetCalculator})(RecommendationScreen);
