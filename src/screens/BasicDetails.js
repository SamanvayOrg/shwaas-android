import React from 'react';
import BaseScreen from '../components/common/BaseScreen';
import {Headline, IconButton, TextInput} from 'react-native-paper';
import HorizontalComponent from '../components/common/HorizontalComponent';
import Space from '../components/common/Space';
import {connect} from 'react-redux';
import {setValue} from '../actions/form';

const BasicDetails = ({age, sex, setValue}) => {
  return (
    <BaseScreen>
      <TextInput
        autoFocus
        keyboardType={'number-pad'}
        label="Age"
        value={age}
        onChangeText={setValue}
      />
      <Space height={72} />
      <Headline>Sex</Headline>
      <HorizontalComponent>
        <IconButton
          icon={'human-male'}
          color={'red'}
          size={40}
          animated
          onPress={() => setValue('sex', 'M')}
          style={sex === 'M' ? {backgroundColor: 'grey', elevation: 2} : {}}
        />
        <IconButton
          icon={'human-female'}
          size={40}
          color={'blue'}
          onPress={() => setValue('sex', 'F')}
          style={sex === 'F' ? {backgroundColor: 'grey', elevation: 2} : {}}
        />
      </HorizontalComponent>
    </BaseScreen>
  );
};

const mapStateToProps = ({form: {age, sex}}) => ({age, sex});
export default connect(mapStateToProps, {setValue: setValue})(BasicDetails);
