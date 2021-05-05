import AsyncStorage from '@react-native-async-storage/async-storage';
import LocalState from './domain/LocalState';

class LocalStorage {
  static async getLocalState() {
    const accepted = await AsyncStorage.getItem('disclaimerAccepted');
    const languageSelected = await AsyncStorage.getItem('languageSelected');
    return new LocalState(
      accepted !== null && accepted === 'true',
      languageSelected,
    );
  }

  static async disclaimerAccepted() {
    return await AsyncStorage.setItem('disclaimerAccepted', 'true');
  }

  static async languageSelected(locale) {
    return await AsyncStorage.setItem('languageSelected', locale);
  }
}

export default LocalStorage;
