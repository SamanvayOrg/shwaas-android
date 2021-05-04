import React from 'react';
import questionTypes from '../../domain/questionTypes';
import NumericQuestion from './NumericQuestion';
import BooleanQuestion from './BooleanQuestion';
import SelectQuestion from './SelectQuestion';
import BreathCounterQuestion from './BreathCounterQuestion';
import Information from './Information';

const Question = ({question, ...props}) => {
  switch (question.type) {
    case questionTypes.numeric: {
      return (
        <NumericQuestion key={question.key} question={question} {...props} />
      );
    }
    case questionTypes.boolean: {
      return (
        <BooleanQuestion key={question.key} question={question} {...props} />
      );
    }
    case questionTypes.singleChoice: {
      return (
        <SelectQuestion key={question.key} question={question} {...props} />
      );
    }
    case questionTypes.multichoice: {
      return (
        <SelectQuestion key={question.key} question={question} {...props} />
      );
    }
    case questionTypes.breathCount: {
      return (
        <BreathCounterQuestion
          key={question.key}
          question={question}
          {...props}
        />
      );
    }
    case questionTypes.information: {
      return <Information key={question.key} question={question} {...props} />;
    }
  }
};

export default Question;
