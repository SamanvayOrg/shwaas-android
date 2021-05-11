import React from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {t} from '../messages';
import HandShow from '../assets/handShow.svg';
import LocalStorage from '../LocalStorage';
import colors from '../colors';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: colors.primary,
    fontSize: 45,
    textAlign: 'center',
  },
});

export default ({onCancel, onAccept}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, margin: 20}}>
      <Text style={styles.title}>{t('title')}</Text>
      <View style={{marginTop: 10, marginBottom: 50}}>
        <HandShow height={height * 0.3} width={width * 0.9} />
      </View>
      <Text style={{fontWeight: 'bold'}}>{t('disclaimer-part-1')}</Text>
      <Text style={{marginTop: 10}}>{t('disclaimer-part-2')}</Text>
      <View showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            justifyContent: 'space-between',
          }}>
          <Button
            mode={'contained'}
            contentStyle={{height: 70}}
            onPress={() => {
              LocalStorage.disclaimerAccepted().then(() => onAccept());
            }}>
            {t('accept')}
          </Button>
          <Button
            mode={'contained'}
            contentStyle={{height: 70}}
            onPress={onCancel}>
            {t('cancel')}
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};
