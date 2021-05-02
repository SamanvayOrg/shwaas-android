import React from 'react';
import {Button, Text, withTheme} from 'react-native-paper';
import {View} from 'react-native';
import messages from '../../domain/messages';

const Navigator = ({
  theme,
  onPrevious = () => {},
  onNext = () => {},
  firstPage,
  lastPage,
}) => {
  return (
    <View
      style={{
        height: 70,
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {!firstPage && (
        <Button
          color={'white'}
          icon={'arrow-left'}
          style={{align: 'flex-start'}}
          contentStyle={{
            height: 70,
          }}
          onPress={onPrevious}>
          {messages.previous}
        </Button>
      )}
      {!lastPage && (
        <Button
          color={'white'}
          icon={'arrow-right'}
          style={{marginLeft: 'auto'}}
          contentStyle={{
            height: 70,
            flexDirection: 'row-reverse',
          }}
          onPress={onNext}>
          {messages.next}
        </Button>
      )}
    </View>
  );
};

export default withTheme(Navigator);
