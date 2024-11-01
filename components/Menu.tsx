import React, {useState} from 'react';
import {StyleSheet, Linking} from 'react-native';
import {FAB} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {noop} from 'lodash';

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 72,
    zIndex: 3,
  },
});

export const Menus = {
  none: 0,
  language: 1,
  flowchart: 2,
  about: 3,
};

export default ({onMenuStateChange = noop, onMenuSelected}) => {
  const { t } = useTranslation();
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
          icon: 'text-box-check',
          label: t('terms'),
          onPress: () => {
            onMenuStateToggled();
            Linking.openURL('https://shwaas.samanvayfoundation.org/terms');
          },
        },
        {
          icon: 'comment-quote',
          label: t('feedback'),
          onPress: () => {
            onMenuStateToggled();
            Linking.openURL(
              `mailto:Shwaas Feedback<shwaas-feedback@samanvayfoundation.org>?subject=Shwaas App Feedback`,
            );
          },
        },
        {
          icon: 'translate',
          label: t('language'),
          onPress: () => {
            onMenuStateToggled();
            onMenuSelected(Menus.language);
          },
        },
        {
          icon: 'information-variant',
          label: t('about'),
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
