import {Dimensions, View} from 'react-native';
import React from 'react';
import Image from 'react-native-scalable-image';

export default ({image}) => {
  if (!image) return null;
  const totalWidthOfScreen = Dimensions.get('window').width - 32;

  return (
    <View style={{marginVertical: 16, alignItems: 'center'}}>
      <Image source={image} width={totalWidthOfScreen / 2} />
    </View>
  );
};
