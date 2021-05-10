import React, {useEffect, useState} from 'react';
import {Button, FAB, Modal, Portal, Provider, Text} from 'react-native-paper';
import {Dimensions, StyleSheet, ScrollView, View} from 'react-native';
import HandShow from '../assets/handShow.svg';
import {t} from '../messages';
import {resetCalculator} from '../actions/form';
import {connect} from 'react-redux';
import Menu, {Menus} from '../components/Menu';
import colors from '../colors';
import {useVersion} from '../components/common/useVersion';

const styles = StyleSheet.create({
  wrapper: {alignItems: 'center', backgroundColor: 'white', flex: 1},
  welcomeMessage: {
    color: colors.primary,
    fontSize: 24,
    textAlign: 'center',
    marginTop: 72,
  },
  title: {
    fontWeight: 'bold',
    color: colors.primary,
    fontSize: 45,
    textAlign: 'center',
  },
  subtitle: {
    color: colors.primary,
    fontSize: 32,
    textAlign: 'center',
    marginTop: 2,
  },
  pushDown: {marginTop: 'auto'},
  buttonStyle: {width: '100%', borderRadius: 0},
  subText: {color: '#74808B', fontWeight: '400', fontSize: 14, textAlign: 'center'},
});

const Home = ({navigation, resetCalculator, route}) => {
  const {width, height} = Dimensions.get('window');
  const isPortrait = height > width;
  const dimensionOfImage = isPortrait ? width * 0.9 : height * 0.9;
  const opacity = isPortrait ? 0.8 : 0.1;
  const {appVersion} = useVersion();

  useEffect(() => navigation.addListener('focus', resetCalculator), []);
  const [imageOpacity, setImageOpacity] = useState(1);

  let localState = route.params.localState;
  const {languageSelected, disclaimerAccepted} = localState;
  const label = disclaimerAccepted
    ? 'getStarted'
    : languageSelected
      ? 'readDisclaimer'
      : 'selectLanguage';
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.wrapper} style={{flex: 1}}>
        <View style={{zIndex: 2}}>
          <Text style={styles.welcomeMessage}>{t('welcome')}</Text>
          <Text style={styles.title}>{t('title')}</Text>
          <Text style={styles.subtitle}>{t('subTitle')}</Text>
          <Text style={styles.subText}>{appVersion}</Text>
        </View>
        <HandShow
          style={styles.pushDown}
          height={dimensionOfImage}
          width={dimensionOfImage}
          opacity={opacity}
          zIndex={1}
        />
      </ScrollView>
      <Menu
        onMenuStateChange={value => setImageOpacity(value ? 0.1 : 1)}
        onMenuSelected={menu => {
          if (menu === Menus.language) {
            navigation.navigate('Language', {localState, flow: false});
          }
        }}
      />
      <Button
        icon="arrow-right"
        style={styles.buttonStyle}
        contentStyle={{width: '100%', height: 70, flexDirection: 'row-reverse'}}
        labelStyle={{fontSize: 20}}
        mode={'contained'}
        onPress={() => {
          if (disclaimerAccepted) {
            navigation.navigate('Questionnaire');
          } else if (languageSelected) {
            navigation.navigate('Disclaimer');
          } else {
            navigation.navigate('Language', {localState, flow: true});
          }
        }}>
        {t(label)}
      </Button>
    </View>
  );
};

export default connect(null, {resetCalculator})(Home);
