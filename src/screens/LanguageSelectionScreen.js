import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import LanguageSelection from '../components/LanguageSelection';
import {t} from '../messages';
import NavigatorUtil from '../NavigatorUtil';

const styles = StyleSheet.create({
  contentStyle: {width: '100%', height: 70, flexDirection: 'row-reverse'},
  containerStyle: {width: '100%', borderRadius: 0},
});

const LanguageSelectScreen = ({navigation, route}) => {
  const [languageSelected, setLanguageSelected] = useState(
    route.params.localState && route.params.localState.languageSelected,
  );

  const navigateToDisclaimer = () =>
    navigation.reset({
      index: 1,
      routes: [{name: 'Home'}, {name: 'Disclaimer'}],
    });
  const firstTimeFlow = route.params.flow;

  return (
    <View style={{flex: 1}}>
      <LanguageSelection
        selectedLanguageLocale={languageSelected}
        onLanguageSelect={locale => setLanguageSelected(locale)}
      />
      <Button
        disabled={!languageSelected}
        icon={firstTimeFlow ? 'arrow-right' : undefined}
        style={styles.containerStyle}
        contentStyle={styles.contentStyle}
        labelStyle={{fontSize: 20}}
        color="#2A4965"
        mode={'contained'}
        onPress={() => {
          firstTimeFlow
            ? navigateToDisclaimer()
            : NavigatorUtil.goToHome(navigation);
        }}>
        {firstTimeFlow ? t('readDisclaimer') : t('confirm')}
      </Button>
    </View>
  );
};

export default LanguageSelectScreen;
