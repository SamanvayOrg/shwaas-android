import React from 'react';
import SelectQuestion from './SelectQuestion';

export default ({question, value, onAnswered = () => {}, ...props}) => {
  const convertOnAnsweredToBoolean = (question, answer) => onAnswered(question, answer === 'yes');
  const convertValue = value => {
    if (value === true) {
      return 'yes';
    }
    if (value === false) {
      return 'no';
    }
    return value;
  };

  return (
    <SelectQuestion question={{...question, options: ['yes', 'no']}}
                    onAnswered={convertOnAnsweredToBoolean}
                    value={convertValue(value)}
                    {...props}/>
  );
}
