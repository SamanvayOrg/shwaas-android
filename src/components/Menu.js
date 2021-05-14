import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 48,
    zIndex: 3,
  },
});

export const Menus = {
  none: 0,
  language: 1,
  flowchart: 2,
  about: 3,
};

export default ({onMenuStateChange, onMenuSelected}) => {
  const [open, setMenuState] = useState(false);

  const onMenuStateToggled = function () {
    onMenuStateChange(!open);
    setMenuState(!open);
  };

  return (
    <FAB.Group
      open={open}
      icon={'menu'}
      style={styles.fab}
      actions={[
        {
          icon: 'translate',
          label: 'Language',
          onPress: () => {
            onMenuStateToggled();
            onMenuSelected(Menus.language);
          },
        },
        {
          icon: 'information-variant',
          label: 'About',
          onPress: () => {
            onMenuStateToggled();
            onMenuSelected(Menus.about);
          },
        },
      ]}
      onStateChange={() => {}}
      onPress={() => {
        onMenuStateToggled();
      }}
    />
  );
};
