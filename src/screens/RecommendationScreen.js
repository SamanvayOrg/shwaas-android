import React from 'react';
import Recommendation from '../components/Recommendation';
import {connect} from 'react-redux';
import RecommendationType from '../domain/RecommendationType';

const RecommendationScreen = () => <Recommendation data={RecommendationType.NotUseful}/>;

const mapStateToProps = ({recommendation}) => ({
    recommendation
});

export default connect(mapStateToProps)(RecommendationScreen);
