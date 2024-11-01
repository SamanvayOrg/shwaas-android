import {atomWithStorage} from 'jotai/utils';
import {atom} from 'jotai';

export const languageAtom = atomWithStorage<string>('language', 'en');
export const disclaimerAcceptedAtom = atomWithStorage<boolean>('disclaimerAccepted', false);

export const disclaimerAcceptedAction = atom(
    null,
    (_get, set, _action) => set(disclaimerAcceptedAtom, true)
    );
