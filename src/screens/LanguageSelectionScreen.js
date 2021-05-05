import React from 'react';
import {Text, Appbar} from 'react-native-paper';
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  FlatList,
} from 'react-native';
import HorizontalComponent from '../components/common/HorizontalComponent';
import {t, changeLanguage} from '../messages';
import {find} from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  basicBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 2,
  },
  appBarText: {
    color: 'white',
    fontSize: 20,
  },
  itemStyle: {
    backgroundColor: '#F4F5F6',
    paddingHorizontal: 10,
    marginVertical: 8,
    minHeight: 50,
    borderRadius: 4,
    justifyContent: 'center',
  },
  answerText: {
    fontSize: 24,
    color: '#000',
  },
});

const languageOptions = [
  {label: 'English', locale: 'en'},
  {label: 'हिंदी (Hindi)', locale: 'hi_In'},
];

const Locale = ({item, setLanguageOption, languageOption}) => {
  const {label, locale} = item;
  const isSelected = languageOption && languageOption.locale === locale;

  return (
    <TouchableNativeFeedback
      onPress={() => {
        AsyncStorage.setItem('language', locale)
          .then(() => changeLanguage(locale))
          .then(() => setLanguageOption(item));
      }}>
      <View
        style={[styles.itemStyle, isSelected && {backgroundColor: '#38A160'}]}>
        <Text style={[styles.answerText, isSelected && {color: '#FFF'}]}>
          {label}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const LanguageSelectScreen = ({navigation, language}) => {
  const [languageOption, setLanguageOption] = React.useState(
    find(languageOptions, ({locale}) => locale === language),
  );

  const renderLanguage = ({item}) => (
    <Locale
      item={item}
      languageOption={languageOption}
      setLanguageOption={setLanguageOption}
    />
  );

  return (
    <View>
      <Appbar dark="true">
        <HorizontalComponent style={styles.basicBox}>
          <Text style={styles.appBarText}>{t('selectLanguage')}</Text>
          <TouchableNativeFeedback
            onPress={() => {
              navigation.reset({
                index: 1,
                routes: [{name: 'Home'}, {name: 'Questionnaire'}],
              });
            }}>
            <View>
              <Text style={styles.appBarText}>{t('forward')}</Text>
            </View>
          </TouchableNativeFeedback>
        </HorizontalComponent>
      </Appbar>
      <FlatList
        data={languageOptions}
        renderItem={renderLanguage}
        keyExtractor={item => item.locale}
      />
    </View>
  );
};

export default LanguageSelectScreen;
