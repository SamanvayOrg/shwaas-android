import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Vibration,
} from 'react-native';
import QuestionBase from './QuestionBase';
import {Text, Button} from 'react-native-paper';
import messages from '../../domain/messages';

const styles = StyleSheet.create({
  container: {flexDirection: 'column'},
  counterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#32d16c',
    elevation: 2,
  },
  counterButtonText: {
    color: 'black',
    fontSize: 24,
  },
  countsContainer: {
    margin: 5,
    minHeight: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    margin: 5,
    fontSize: 24,
  },
  resetSubmitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

const {height} = Dimensions.get('window');
const MAX_TIME_SECOND = 10;

export default ({number, question, onAnswered = () => {}}) => {
  const [timer, setTimer] = useState(MAX_TIME_SECOND);
  const [breathCount, setBreathCount] = useState(0);
  const [intervalId, setIntervalId] = useState();
  const isFirstPress = timer === MAX_TIME_SECOND;
  const isTimeComplete = timer === 0;

  const startTimer = () => {
    return setInterval(() => setTimer(prevTime => prevTime - 1), 1000);
  };

  useEffect(() => {
    if (isTimeComplete) {
      clearInterval(intervalId);
      onAnswered(breathCount);
    }
  }, [timer]);

  const onCounterPress = () => {
    if (isFirstPress) {
      setTimer(prevTime => prevTime - 1);
      setIntervalId(startTimer());
    }
    Vibration.vibrate();
    setBreathCount(prevCount => prevCount + 1);
  };

  const onReset = () => {
    clearInterval(intervalId);
    setTimer(MAX_TIME_SECOND);
    setBreathCount(0);
  };

  const pressButtonMessage = isFirstPress
    ? messages.breathCounterStart
    : messages.breathCounterAfterStart;

  return (
    <View>
      <QuestionBase number={number} question={question} />
      <View style={styles.container}>
        <TouchableOpacity onPress={onCounterPress} disabled={isTimeComplete}>
          <View
            style={[
              styles.counterButton,
              {height: height * 0.3},
              isTimeComplete && {backgroundColor: '#BABABA'},
            ]}>
            <Text style={styles.counterButtonText}>{pressButtonMessage}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.countsContainer}>
          {isTimeComplete ? (
            <Text style={styles.countText}>
              {messages.result} : {`${breathCount} ${messages.bpm}`}
            </Text>
          ) : (
            <View>
              <Text style={styles.countText}>Breaths : {breathCount}</Text>
              <Text style={styles.countText}>
                {messages.seconds} : {timer < 10 ? `0${timer}` : timer}
              </Text>
            </View>
          )}
        </View>
        <Button
          style={{marginTop: 20}}
          contentStyle={{height: 70}}
          disabled={isFirstPress}
          color={'#d15434'}
          mode={'contained'}
          onPress={onReset}>
          {messages.reset}
        </Button>
      </View>
    </View>
  );
};
