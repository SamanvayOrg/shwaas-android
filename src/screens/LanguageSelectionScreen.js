import React from 'react';
import {Text, Appbar} from 'react-native-paper';
import {
  Dimensions,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  FlatList,
} from 'react-native';
import HorizontalComponent from '../components/common/HorizontalComponent';
import messages from '../messages';

const styles = StyleSheet.create({
  basicBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 2,
  },
  appBarText: {
    color: 'white',
  },
});

const languageOptions = [
  {label: 'English', locale: 'en'},
  {label: 'हिंदी (Hindi)', locale: 'en_IN'},
];

const Item = ({item, value}) => {
  const isSelected = value === title;

  const {label, locale} = item;

  return (
    <TouchableNativeFeedback
      onPress={() => {
        messages.setLanguage(locale);
      }}>
      <View style={[isSelected ? styles.selectedItem : styles.nonSelectedItem]}>
        <Text
          style={[
            isSelected
              ? styles.selectedAnswerText
              : styles.nonSelectedAnswerText,
          ]}>
          {title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const renderItem = ({item}) => (
  <Item
    question={question}
    title={item}
    onPress={onItemSelected}
    value={answer}
  />
);

const LanguageSelectScreen = ({navigation}) => {
  return (
    <View>
      <Appbar dark="true">
        <HorizontalComponent style={styles.basicBox}>
          <Text style={styles.appBarText}>Select Language</Text>
          <TouchableNativeFeedback
            onPress={() => {
              navigation.navigate('Questionnaire');
            }}>
            <View>
              <Text style={styles.appBarText}>Next</Text>
            </View>
          </TouchableNativeFeedback>
        </HorizontalComponent>
      </Appbar>

      <FlatList
        data={languageOptions}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default LanguageSelectScreen;
