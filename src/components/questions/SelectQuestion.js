import React from 'react';
import {
  StyleSheet,
  TouchableNativeFeedback,
  View,
  FlatList,
} from 'react-native';
import {Text} from 'react-native-paper';
import QuestionBase from './QuestionBase';
import {t} from '../../messages';
import questionTypes from '../../domain/questionTypes';
import {isDefined} from '../../domain/questions/utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  selectedAnswerText: {
    fontSize: 24,
    color: '#FFF',
  },
  nonSelectedAnswerText: {
    fontSize: 24,
    color: '#000',
  },
});

const Item = ({title, onPress, selectedAnswers}) => {
  const isSelected = selectedAnswers.includes(title);

  return (
    <TouchableNativeFeedback onPress={() => onPress(title)}>
      <View style={[isSelected ? styles.selectedItem : styles.nonSelectedItem]}>
        <Text
          style={[
            isSelected
              ? styles.selectedAnswerText
              : styles.nonSelectedAnswerText,
          ]}>
          {t(title)}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const isSingleSelect = question =>
  [questionTypes.singleChoice, questionTypes.boolean].includes(question.type);

export default ({number, question, onAnswered = () => {}, value}) => {
  const answer = !isDefined(value)
    ? []
    : isSingleSelect(question)
    ? [value]
    : value;

  const onItemSelected = key => {
    if (isSingleSelect(question)) {
      onAnswered(question, key);
      return;
    }

    if (answer.includes(key)) {
      onAnswered(
        question,
        answer.filter(val => val !== key),
      );
      return;
    }

    onAnswered(question, answer.concat(key));
  };

  const renderItem = ({item}) => (
    <Item
      question={question}
      title={item}
      onPress={onItemSelected}
      selectedAnswers={answer}
    />
  );

  return (
    <View style={styles.container}>
      <QuestionBase number={number} question={question} />
      <FlatList
        data={question.options}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </View>
  );
};
