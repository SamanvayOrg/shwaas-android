import { atomWithStorage } from 'jotai/utils';
import {atom} from 'jotai';

export const languageAtom = atomWithStorage('language', 'en');
export const disclaimerAcceptedAtom = atomWithStorage('disclaimerAccepted', false);

export const disclaimerAcceptedAction = atom(null, (get, set, action) => {
    set(disclaimerAcceptedAtom, true);
});
