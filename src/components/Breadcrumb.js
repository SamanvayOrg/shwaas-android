import React from 'react';
import {
  Badge,
  Button,
  Colors,
  Surface,
  Text,
  withTheme,
} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import _ from 'lodash';
import {outputColors} from '../domain/questions/utils';
import {visibleQuestions} from '../domain/questionModel';

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 4,
    marginHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const getColor = function (visibleQuestions, form, index, currentIndex) {
  let output = visibleQuestions[index].output(form);
  if (index === currentIndex) return '#2490EF';
  if (_.isNil(output)) return '#74808B';
  return outputColors[output];
};

const Breadcrumb = ({style, theme, form, currentIndex}) => {
  return (
    <View style={[styles.wrapper]}>
      {visibleQuestions(form).map((vq, index, arr) => {
        let color = getColor(arr, form, index, currentIndex);
        console.log('Breadcrumb', color);
        return (
          <Surface
            key={`q-${index}`}
            style={{
              backgroundColor: color,
              width: 25,
              marginRight: 4,
              borderRadius: 11,
            }}>
            <Text
              style={{color: Colors.white, alignSelf: 'center', fontSize: 18}}>
              {index + 1}
            </Text>
          </Surface>
        );
      })}
    </View>
  );
};

export default withTheme(Breadcrumb);
