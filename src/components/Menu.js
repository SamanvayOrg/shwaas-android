import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider, FAB, Button, Text, Menu, Portal} from 'react-native-paper';
import messages from '../messages';

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 70,
  },
});

export const Menus = {
  none: 0,
  language: 1,
  flowchart: 2,
};

export default ({onMenuStateChange, onMenuSelected}) => {
  const [open, setMenuState] = useState(false);

  const onMenuStateToggled = function () {
    onMenuStateChange(!open);
    setMenuState(!open);
  };

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={'menu'}
          style={{paddingBottom: 70}}
          actions={[
            {
              icon: 'web',
              label: 'Language',
              onPress: () => {
                onMenuStateToggled();
                onMenuSelected(Menus.language);
              },
            },
            // {
            //   icon: 'sitemap',
            //   label: 'Algorithm',
            //   onPress: () => {
            //   },
            // },
          ]}
          onStateChange={() => {}}
          onPress={() => {
            onMenuStateToggled();
          }}
        />
      </Portal>
    </Provider>
  );
};
