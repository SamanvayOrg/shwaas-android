import React from 'react';
import NumericQuestion from './NumericQuestion';
import BooleanQuestion from './BooleanQuestion';
import SelectQuestion from './SelectQuestion';
import BreathCounterQuestion from './BreathCounterQuestion';
import Information from './Information';
import TimerQuestion from './TimerQuestion';

const Question = ({question, ...props}) => {
  const questionType = question.type;
  if (questionType.isNumeric) {
    return (<NumericQuestion key={question.key} question={question} {...props} />);
  }
  if (questionType.isBoolean) {
    return (<BooleanQuestion key={question.key} question={question} {...props} />);
  }
  if (questionType.isSingleChoice) {
    return (<SelectQuestion key={question.key} question={question} {...props} />);
  }
  if (questionType.isMultiChoice) {
    return (<SelectQuestion key={question.key} question={question} {...props} />);
  }
  if (questionType.isBreathCount) {
    return (
      <BreathCounterQuestion
        key={question.key}
        question={question}
        {...props}
      />
    );
  }
  if (questionType.isInformation) {
    return <Information key={question.key} question={question} {...props} />;
  }
  if (questionType.isTimer) {
    return <TimerQuestion key={question.key} question={question} {...props} />;
  }
};

export default Question;
