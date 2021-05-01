import coughInPast7Days from './questions/coughInPast7Days';
import feverInPast7Days from './questions/feverInPast7Days';
import difficultyBreathing from './questions/difficultyBreathing';

export default {
  start: {
    questions: [coughInPast7Days],
  },
  home: {
    screen: 'Home',
  },
  recommendations: {
    screen: 'Recommendations',
  },
  coughInPast7Days: {
    questions: [coughInPast7Days],
  },
  feverInPast7Days: {
    questions: [feverInPast7Days],
  },
  difficultyBreathing: {
    questions: [difficultyBreathing],
  },
  hardToRecogniseRelatives: {
    screen: 'Home',
  },
};
