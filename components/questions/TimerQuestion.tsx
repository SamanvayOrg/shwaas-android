import React, {useEffect, useState} from 'react';
import {ScrollView, Vibration} from 'react-native';
import {Colors, Button, Card, ProgressBar} from 'react-native-paper';
import QuestionBase from './QuestionBase';
import _ from 'lodash';
import QuestionImage from './QuestionImage';
import {useTranslation} from 'react-i18next';

const getDisplayTime = function (seconds) {
  let sec = seconds % 60;
  let min = Math.floor(seconds / 60);

  return `${min} Minutes and ${sec} Seconds`;
};

const globalData = {
  seconds: 0,
};

const totalSeconds = 360;

export default ({number, question, onAnswered = () => {}, value}) => {
  const { t } = useTranslation();
  const [seconds, setSeconds] = useState(0);
  const [started, setTimer] = useState(false);

  useEffect(() => {
    if (started) {
      globalData.seconds = 0;
      globalData.intervalHandle = setInterval(function () {
        globalData.seconds = globalData.seconds + 1;
        if (globalData.seconds === totalSeconds) {
          stopTimer();
          Vibration.vibrate(2 * 1000);
        }
        setSeconds(globalData.seconds);
      }, 1000);
    }
  }, [started]);

  const stopTimer = function () {
    clearInterval(globalData.intervalHandle);
    globalData.intervalHandle = null;
  };

  const onStartTimer = function () {
    setTimer(true);
  };

  const onStopTimer = function () {
    stopTimer();
    setTimer(false);
  };

  let timerRunning = !_.isNil(globalData.intervalHandle);
  return (
    <QuestionBase number={number} question={question}>
      <Button
        mode={'contained'}
        onPress={() => onStartTimer()}
        contentStyle={{width: '100%', height: 70}}
        labelStyle={{fontSize: 20}}
        disabled={timerRunning}>
        {t('startTimer')}
      </Button>

      {seconds !== 0 && (
        <>
          <Card>
            <Card.Title title={getDisplayTime(seconds)} />
          </Card>
          <ProgressBar
            progress={seconds / totalSeconds}
            color={Colors.green900}
            style={{marginTop: 5, marginBottom: 10}}
          />
        </>
      )}

      {seconds === totalSeconds && (
        <Card>
          <Card.Title title={t('sixMinuteComplete')} />
        </Card>
      )}

      {timerRunning && (
        <Button mode={'contained'} onPress={() => onStopTimer()}>
          {t('stopTimer')}
        </Button>
      )}
      <QuestionImage image={question.commonImage} />
    </QuestionBase>
  );
};
