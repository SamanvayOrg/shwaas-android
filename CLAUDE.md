# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npx expo start          # Start dev server
npx expo start --android  # Start and open on Android
npm run android         # Run on Android device/emulator
npm run ios             # Run on iOS simulator
npm run lint            # Lint with expo lint
npm test                # Run Jest tests (watch mode)
npm test -- --watchAll=false  # Run tests once (CI mode)
```

**EAS builds:**
```bash
eas build --profile development --platform android
eas build --profile preview --platform android
eas build --profile production --platform android
```

## Architecture

**Shwaas** is a React Native / Expo health screening app for semiliterate field workers to assess pneumonia (and expanding to other ailments) risk. Workers answer questions about a patient and receive a recommendation (e.g., admit to hospital, refer, manage at home).

### Key Libraries
- **Expo Router** (~3.5.24): File-based routing under `app/`
- **Jotai** (2.10.1): Atom-based global state; some atoms persist to AsyncStorage
- **React Native Paper** (5.12.5): Material Design UI components
- **i18next** + **react-i18next**: 8 languages (en, hi_IN, kn_IN, te_IN, bn_IN, ta_IN, mr, ml)

### Navigation Flow
`app/index.tsx` → language selection → disclaimer → `app/questionnaire.tsx` → `app/recommendations.tsx`

Screens are a Stack navigator defined in `app/_layout.tsx`.

### State Management (`atoms/`)
- `atoms/form.ts`: Active form state — current question key, all answers, navigation actions (`nextQuestionAction`, `setValueAction`)
- `atoms/settings.ts`: Persisted user settings — language preference, disclaimer acceptance
- `atoms/recommendations.ts`: Computed recommendations displayed at end of flow

Derived atoms in `form.ts` compute the current question component and visible question list from the raw answer map.

### Domain Logic (`domain/`)
- `domain/questionModel.ts`: Core logic — filters which questions are visible given current answers, handles branching, computes the final recommendation
- Questions are split into three groups: `domain/questions/adult/`, `domain/questions/child/`, and `domain/questions/common/`. The adult vs. child path is determined by the age answer (≤ 12 months → child questions)
- `domain/questionTypes/`: TypeScript interfaces for each question type (Boolean, Numeric, Age, Select, BreathCounter, Timer, Information)
- `domain/recommendations/`: Recommendation types and weight logic (red/yellow/black flags, comorbidities, glucose readings)

### Question Components (`components/questions/`)
Each question type has a dedicated React component that receives the question definition and dispatches a Jotai action when answered.

### i18n (`i18n/`)
- Initialized in `i18n/index.ts` at app startup
- Translation JSON files live in `i18n/locales/<lang>/translation.json`
- Language is stored as a persisted Jotai atom in `atoms/settings.ts`; changing it calls `i18n.changeLanguage()`

### Path Alias
`@/*` maps to the repo root (configured in `tsconfig.json`). Use this for all internal imports.
