import React from 'react';
import {Button, Text} from 'react-native-paper';
import {Dimensions, View, StyleSheet} from 'react-native';
import HandShow from '../assets/handShow.svg';
import messages from '../domain/messages';

const styles = StyleSheet.create({
  wrapper: {flex: 1, alignItems: 'center', backgroundColor: 'white'},
  welcomeMessage: {
    fontWeight: 'bold',
    color: '#2A4965',
    fontSize: 45,
    textAlign: 'center',
    marginTop: 24,
  },
  pushDown: {marginTop: 'auto'},
  buttonStyle: {width: '100%', borderRadius: 0},
});
const {width} = Dimensions.get('window');

export default ({navigation}) => (
  <View style={styles.wrapper}>
    <Text style={styles.welcomeMessage}>{messages.welcome}</Text>
    <View style={styles.pushDown}>
      <HandShow height={width * 0.8} width={width * 0.8} />
    </View>
    <Button
      icon="arrow-right"
      style={styles.buttonStyle}
      contentStyle={{width: '100%', height: 70, flexDirection: 'row-reverse'}}
      labelStyle={{fontSize: 20}}
      color="#2A4965"
      mode={'contained'}
      onPress={() => {
        navigation.navigate('BasicDetails');
      }}>
      Get started
    </Button>
  </View>
);
