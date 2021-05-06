import React, {useEffect, useRef} from 'react';
import {Colors, Text, withTheme} from 'react-native-paper';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import _ from 'lodash';
import {isDefined} from '../domain/questions/utils';
import {visibleQuestions} from '../domain/questionModel';
import colors from '../colors';

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 4,
    flexDirection: 'row',
    height: 70,
  },
});

const getColor = function (visibleQuestions, form, index, currentIndex) {
  if (index === currentIndex) return colors.accent;
  if (!isDefined(form[visibleQuestions[index].key])) {
    return colors.lightPrimary;
  }
  let output = visibleQuestions[index].output(form);
  if (_.isNil(output)) return colors.lightPrimary;
  return colors[output];
};

const Breadcrumb = ({style, theme, form, currentIndex, onQuestionChange}) => {
  const scrollViewRef = useRef();

  useEffect(() => {
    const widthOfACircle = 66;
    const totalWidthOfScreen = Dimensions.get('window').width;
    let scrollToX = widthOfACircle * currentIndex - totalWidthOfScreen / 2 + 32;
    scrollViewRef.current.scrollTo({y: 0, x: scrollToX, animated: true});
  }, [currentIndex]);

  return (
    <View style={{height: 96}}>
      <ScrollView
        ref={scrollViewRef}
        style={[styles.wrapper]}
        contentContainerStyle={{alignItems: 'center', backgroundColor: '#f4f5f6'}}
        horizontal>
        {visibleQuestions(form).map((vq, index, arr) => {
          let color = getColor(arr, form, index, currentIndex);
          return (
            <TouchableNativeFeedback
              key={`q-${index}`}
              onPress={() => {
                onQuestionChange(index);
              }}
              background={TouchableNativeFeedback.Ripple(
                theme.colors.primary,
                true,
                25,
              )}>
              <View
                style={{
                  backgroundColor: color,
                  width: 50,
                  height: 50,
                  marginHorizontal: 8,
                  borderRadius: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                }}>
                <Text
                  style={{
                    color: Colors.white,
                    alignSelf: 'center',
                    fontSize: 18,
                  }}>
                  {index + 1}
                </Text>
              </View>
            </TouchableNativeFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default withTheme(Breadcrumb);
