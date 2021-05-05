import React, {useEffect, useState} from 'react';
import {Button, FAB, Modal, Portal, Provider, Text} from 'react-native-paper';
import {Dimensions, StyleSheet, View} from 'react-native';
import HandShow from '../assets/handShow.svg';
import {t} from '../messages';
import {resetCalculator} from '../actions/form';
import {connect} from 'react-redux';
import Menu, {Menus} from '../components/Menu';

const styles = StyleSheet.create({
  wrapper: {flex: 1, alignItems: 'center', backgroundColor: 'white'},
  welcomeMessage: {
    color: '#2A4965',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 2,
  },
  title: {
    fontWeight: 'bold',
    color: '#2A4965',
    fontSize: 45,
    textAlign: 'center',
  },
  subtitle: {
    color: '#2A4965',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 2,
  },
  pushDown: {marginTop: 'auto'},
  buttonStyle: {width: '100%', borderRadius: 0},
});

const {width} = Dimensions.get('window');

const Home = ({navigation, resetCalculator, route}) => {
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
    <View style={styles.wrapper}>
      {
        <Menu
          onMenuStateChange={value => setImageOpacity(value ? 0.1 : 1)}
          onMenuSelected={menu => {
            if (menu === Menus.language) {
              navigation.navigate('Language', {localState, flow: false});
            }
          }}
        />
      }
      <Text style={styles.welcomeMessage}>{t('welcome')}</Text>
      <Text style={styles.title}>{t('title')}</Text>
      <Text style={styles.subtitle}>{t('subTitle')}</Text>
      <View style={styles.pushDown}>
        <HandShow
          height={width * 0.7}
          width={width * 0.6}
          opacity={imageOpacity}
        />
      </View>
      <Button
        icon="arrow-right"
        style={styles.buttonStyle}
        contentStyle={{width: '100%', height: 70, flexDirection: 'row-reverse'}}
        labelStyle={{fontSize: 20}}
        color="#2A4965"
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
