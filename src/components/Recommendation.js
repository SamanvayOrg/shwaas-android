import React from 'react';
import {View} from 'react-native';
import {Surface, Text} from 'react-native-paper';
import messages from '../messages';

export default ({data}) => {
  return (
    <View style={{flex: 1, marginTop: 20}}>
      <View
        style={{
          backgroundColor: data.shortMessageTextAndOuterBoxColor,
          alignItems: 'center',
          paddingTop: 20,
          paddingBottom: 20,
          paddingHorizontal: 10,
        }}>
        <Text style={{color: '#EEF7F1', fontSize: 32}}>
          {messages[data.startingMessageKey]}
        </Text>
        <View
          style={{
            backgroundColor: '#EEF7F1',
            borderRadius: 8,
            alignItems: 'center',
            alignSelf: 'stretch',
          }}>
          <Text
            style={{
              color: data.shortMessageTextAndOuterBoxColor,
              fontSize: 40,
            }}>
            {messages[data.shortMessageKey]}
          </Text>
        </View>
      </View>

      <Surface
        style={{
          minHeight: 144,
          padding: 16,
          marginTop: 8,
          backgroundColor: data.shortMessageTextAndOuterBoxColor,
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            alignSelf: 'center',
            color: '#EEF7F1',
          }}>
          Recommendation
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 28,
            marginTop: 8,
            color: '#EEF7F1',
          }}>
          {messages[data.description]}
        </Text>
      </Surface>
    </View>
  );
};
