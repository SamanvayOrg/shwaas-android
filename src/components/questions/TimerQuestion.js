import React, {useEffect, useState} from 'react';
import {Colors, Button, Card, ProgressBar} from 'react-native-paper';
import QuestionBase from './QuestionBase';
import messages from '../../messages';

const getDisplayTime = function (seconds) {
  let sec = seconds % 60;
  let min = (seconds / 60).toFixed(0);

  return `${min} Minutes and ${sec} Seconds`;
};

const globalSecondsValue = {
  seconds: 0,
};

export default ({number, question, onAnswered = () => {}, value}) => {
  const [seconds, setSeconds] = useState(0);
  const [intervalHandle, setIntervalHandle] = useState(null);
  const [started, setTimer] = useState(false);

  useEffect(() => {
    if (started) {
      globalSecondsValue.seconds = 0;
      const interval = setInterval(function () {
        globalSecondsValue.seconds = globalSecondsValue.seconds + 1;
        if (globalSecondsValue.seconds === 360) {
          clearInterval(intervalHandle);
        }
        setSeconds(globalSecondsValue.seconds);
      }, 1000);
      setIntervalHandle(interval);
    }
  }, [started]);

  const onStartTimer = function () {
    setTimer(true);
  };

  const onStopTimer = function () {
    clearInterval(intervalHandle);
    setIntervalHandle(null);
    setTimer(false);
  };

  let timerRunning = intervalHandle !== null;
  return (
    <QuestionBase number={number} question={question}>
      <Button
        mode={'contained'}
        onPress={() => onStartTimer()}
        disabled={timerRunning}>
        {messages['startTimer']}
      </Button>

      {timerRunning && (
        <>
          <Card>
            <Card.Title title={getDisplayTime(seconds)} />
          </Card>
          <ProgressBar
            progress={seconds / 360}
            color={Colors.green900}
            style={{marginTop: 5, marginBottom: 10}}
          />
        </>
      )}

      {seconds === 360 && (
        <Card>
          <Card.Title title={messages['sixMinuteComplete']} />
        </Card>
      )}

      {timerRunning && (
        <Button mode={'contained'} onPress={() => onStopTimer()}>
          {messages['stopTimer']}
        </Button>
      )}
    </QuestionBase>
  );
};
