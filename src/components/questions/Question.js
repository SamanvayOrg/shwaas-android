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
      return <NumericQuestion question={question} {...props} />;
    }
    case questionTypes.boolean: {
      return <BooleanQuestion question={question} {...props} />;
    }
    case questionTypes.singleChoice: {
      return <SelectQuestion question={question} {...props} />;
    }
    case questionTypes.multichoice: {
      return <SelectQuestion question={question} {...props} />;
    }
    case questionTypes.breathCount: {
      return <BreathCounterQuestion question={question} {...props} />;
    }
    case questionTypes.information: {
      return <Information question={question} {...props} />;
    }
  }
};

export default Question;
