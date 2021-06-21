import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {t} from '../messages';
import NavigatorUtil from '../NavigatorUtil';
import Answers from './Answers';
import colors from '../colors';

const styles = StyleSheet.create({
  container: {flex: 1},
  contentContainer: {
    paddingHorizontal: 10,
    marginBottom: 80,
  },
  shortMessageContainer: {
    marginTop: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 10,
    elevation: 2,
    borderRadius: 5,
  },
  shortMessageText: {
    fontSize: 40,
  },
  shortMessageTextContainer: {
    backgroundColor: '#EEF7F1',
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  nextStepsContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#EEF0F2',
    elevation: 2,
    borderRadius: 5,
  },
  buttonStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderRadius: 0,
  },
});

export default ({data, messages = [], navigation, onStartOver, form = {}}) => {
  const validMessages = messages.filter(
    message => message && message.length > 0,
  );
  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <View
          style={[
            styles.shortMessageContainer,
            {backgroundColor: data.shortMessageTextAndOuterBoxColor},
          ]}>
          <Text style={{color: '#EEF7F1', fontSize: 32}}>
            {t(data.startingMessageKey)}
          </Text>
          <View style={styles.shortMessageTextContainer}>
            <Text
              style={[
                styles.shortMessageText,
                {color: data.shortMessageTextAndOuterBoxColor},
              ]}>
              {t(data.shortMessageKey)}
            </Text>
          </View>
        </View>
        <View style={styles.nextStepsContainer}>
          <Text style={{textAlign: 'center', fontSize: 32}}>
            {t('nextSteps')}
          </Text>
          <Text style={{fontSize: 18, color: colors.primary}}>
            {t(data.nextSteps)}
          </Text>
          {validMessages.map((message, index) => (
            <Text
              style={{fontSize: 18, color: colors.primary, marginTop: 12}}
              key={index}>
              ⬤ {t(message)}
            </Text>
          ))}
        </View>
        <Answers form={form} />
      </ScrollView>
      <Button
        style={styles.buttonStyle}
        contentStyle={{height: 70}}
        labelStyle={{fontSize: 20}}
        icon="restart"
        mode="contained"
        onPress={() => {
          onStartOver();
          NavigatorUtil.goToHome(navigation);
        }}>
        {t('startOver')}
      </Button>
    </View>
  );
};
