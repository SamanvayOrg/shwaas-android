const ADULT = 'adult';
const CHILD = 'child';
const ageType = form => (form.age > 144 ? ADULT : CHILD);

export default {
  ADULT,
  CHILD,
  ageType,
};
