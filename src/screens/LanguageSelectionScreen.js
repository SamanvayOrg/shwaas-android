import React, {useState} from 'react';
import {Appbar, Text} from 'react-native-paper';
import HorizontalComponent from '../components/common/HorizontalComponent';
import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import LanguageSelection from '../components/LanguageSelection';
import {t} from '../messages';
import NavigatorUtil from '../NavigatorUtil';

const styles = StyleSheet.create({
  basicBox: {
    flex: 1,
    marginHorizontal: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appBarText: {
    color: 'white',
    fontSize: 18,
  },
  appBarTitle: {
    color: 'white',
    fontSize: 18,
  },
});

const next = function (navigation, flow, languageSelected) {
  return (
    <TouchableNativeFeedback
      onPress={() => {
        navigation.reset({
          index: 1,
          routes: [{name: 'Home'}, {name: 'Disclaimer'}],
        });
      }}>
      <View>
        <Text style={styles.appBarText}>
          {flow && languageSelected ? t('next') : ''}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const back = function (navigation, flow) {
  return (
    <TouchableNativeFeedback
      onPress={() => {
        NavigatorUtil.goToHome(navigation);
      }}>
      <View>
        <Text style={styles.appBarText}>{flow ? '' : t('back')}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const LanguageSelectScreen = ({navigation, route}) => {
  const [languageSelected, setLanguageSelected] = useState(
    route.params.localState && route.params.localState.languageSelected,
  );

  return (
    <View>
      <Appbar dark="true">
        <HorizontalComponent style={styles.basicBox}>
          {back(navigation, route.params.flow)}
          <Text style={styles.appBarTitle}>{t('selectLanguage')}</Text>
          {next(navigation, route.params.flow, languageSelected)}
        </HorizontalComponent>
      </Appbar>
      <LanguageSelection
        selectedLanguageLocale={languageSelected}
        onLanguageSelect={locale => setLanguageSelected(locale)}
      />
    </View>
  );
};

export default LanguageSelectScreen;
