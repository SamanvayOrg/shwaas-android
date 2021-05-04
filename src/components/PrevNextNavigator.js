import React from 'react';
import {Button, withTheme} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import messages from '../messages';

const styles = StyleSheet.create({
  wrapper: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextButton: {
    marginLeft: 'auto',
  },
  nextButtonContent: {
    height: 70,
    flexDirection: 'row-reverse',
  },
  previousButtonContent: {
    height: 70,
  },
  previousButton: {
    alignItems: 'flex-start',
  },
});

const Navigator = ({
  style,
  theme,
  onPrevious = () => {},
  onNext = () => {},
  firstPage,
  lastPage,
}) => {
  return (
    <View
      style={[styles.wrapper, {backgroundColor: theme.colors.primary}, style]}>
      {!firstPage && (
        <Button
          color={'white'}
          icon={'arrow-left'}
          style={styles.previousButton}
          contentStyle={styles.previousButtonContent}
          onPress={onPrevious}>
          {messages.get('previous')}
        </Button>
      )}
      {!lastPage && (
        <Button
          color={'white'}
          icon={'arrow-right'}
          style={styles.nextButton}
          contentStyle={styles.nextButtonContent}
          onPress={onNext}>
          {messages.get('next')}
        </Button>
      )}
    </View>
  );
};

export default withTheme(Navigator);
