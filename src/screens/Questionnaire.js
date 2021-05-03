import {connect} from 'react-redux';
import React from 'react';
import {Text} from 'react-native-paper';

const Questionnaire = () => {
  return <Text>Questionnaire</Text>;
};

const mapStateToProps = ({form}) => form;
export default connect()(Questionnaire);
