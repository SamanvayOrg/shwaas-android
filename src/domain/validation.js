import messages from '../translations/en';

const isFunction = functionToCheck => {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
  );
};

//Validation of questions. Runs during startup, gives error in console.
//This can be useful when debugging new questions that come up
const validate = (questions) => {
  questions.map(question => {
    if (!question.key) {
      console.error(`Question does not have key - ${JSON.stringify(question)}`);
      return;
    }
    if (!question.label) {
      console.error(`Question ${question.key} should have a label`);
    }
    if (!messages[question.label]) {
      console.error(`Question ${question.key} should have a label in messages`);
    }
    if (!isFunction(question.show)) {
      console.error(`Question ${question.key} does not have the show function`);
    }
    if (!isFunction(question.output)) {
      console.error(`Question ${question.key} does not have the output function`);
    }
  });
  const keys = questions.map(question => question.key);
  if (new Set(keys).size < keys.length) {
    console.error('Duplicate question keys present');
  }
};

export {
  validate
};
