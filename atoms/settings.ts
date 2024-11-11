import {atomWithStorage, createJSONStorage} from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage'

const storage = createJSONStorage(() => AsyncStorage);
export const languageAtom = atomWithStorage<string>('language', 'en', storage, {getOnInit: true});
export const disclaimerAcceptedAtom = atomWithStorage<boolean>('disclaimerAccepted', false, storage);
