import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Paragraph, Text, Button} from 'react-native-paper';
import {t} from '../messages';
import {useDispatch} from 'react-redux';
import {resetCalculator} from '../actions/form';
import NavigatorUtil from '../NavigatorUtil';

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 20, paddingHorizontal: 10},
  shortMessageContainer: {
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
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#EEF0F2',
    elevation: 2,
    borderRadius: 5,
  },
});

export default ({data, navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
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
        <Paragraph>{t(data.nextSteps)}</Paragraph>
      </View>
      <Button
        contentStyle={{height: 70}}
        icon="restart"
        mode="contained"
        onPress={() => {
          dispatch(resetCalculator());
          NavigatorUtil.goToHome(navigation);
        }}>
        {t('startOver')}
      </Button>
    </View>
  );
};
