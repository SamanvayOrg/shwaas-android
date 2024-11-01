import {Dimensions, Modal, TouchableNativeFeedback, View, Image} from 'react-native';
import React, {useState} from 'react';

export default ({image}) => {
  if (!image) return null;
  const totalWidthOfScreen = Dimensions.get('window').width - 32;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{marginVertical: 16, alignItems: 'center'}}>
      <Modal
        animationType={'fade'}
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableNativeFeedback onPress={() => setModalVisible(false)}>
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Image source={image} width={totalWidthOfScreen - 32} />
          </View>
        </TouchableNativeFeedback>
      </Modal>
      <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
        <Image source={image} width={totalWidthOfScreen / 2} />
      </TouchableNativeFeedback>
    </View>
  );
};
