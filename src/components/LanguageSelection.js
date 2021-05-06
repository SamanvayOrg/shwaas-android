import {ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {changeLanguage, t} from '../messages';
import {List} from 'react-native-paper';
import LocalStorage from '../LocalStorage';
import colors from '../colors';

const languageOptions = [
  {label: 'English', locale: 'en'},
  {label: 'हिंदी', locale: 'hi_In'},
];

const styles = StyleSheet.create({
  commonItem: {
    marginTop: 10,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  nonSelectedItem: {
    backgroundColor: '#F4F5F6',
    marginVertical: 8,
    paddingHorizontal: 16,
    minHeight: 50,
    borderRadius: 8,
    justifyContent: 'center',
    elevation: 2,
  },
  selectedItem: {
    backgroundColor: '#4A58DD',
    paddingHorizontal: 16,
    paddingLeft: 16,
    marginVertical: 8,
    minHeight: 50,
    borderRadius: 8,
    justifyContent: 'center',
    elevation: 2,
  },
  commonAnswerText: {
    fontSize: 30,
    alignSelf: 'center',
  },
  selectedAnswerText: {
    color: colors.contrastingTextColor,
  },
  nonSelectedAnswerText: {
    color: colors.regularTextColor,
  },
});

export default ({selectedLanguageLocale, onLanguageSelect}) => {
  const [currentLanguageLocale, setLanguageLocale] = useState(
    selectedLanguageLocale,
  );

  const chooseLanguage = function (lang) {
    LocalStorage.languageSelected(lang.locale).then(() => {
      changeLanguage(lang.locale);
      setLanguageLocale(lang.locale);
      onLanguageSelect(lang.locale);
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{marginTop: 30, backgroundColor: colors.background}}>
      {languageOptions.map(language => {
        let isSelected = language.locale === currentLanguageLocale;
        return (
          <List.Item
            key={language.locale}
            title={language.label}
            style={[
              styles.commonItem,
              isSelected ? styles.selectedItem : styles.nonSelectedItem,
            ]}
            titleStyle={[
              styles.commonAnswerText,
              isSelected
                ? styles.selectedAnswerText
                : styles.nonSelectedAnswerText,
            ]}
            onPress={() => chooseLanguage(language)}
          />
        );
      })}
    </ScrollView>
  );
};
