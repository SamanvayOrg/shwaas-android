import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  TouchableNativeFeedback,
  Dimensions,
  Vibration,
  ScrollView,
} from 'react-native';
import QuestionBase from './QuestionBase';
import {Text, Button, TextInput, Card} from 'react-native-paper';
import {t} from '../../messages';
import colors from '../../colors';
import HorizontalComponent from '../common/HorizontalComponent';

const styles = StyleSheet.create({
  container: {flexDirection: 'column'},
  counterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.accent,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 24,
    minHeight: 150,
    elevation: 4,
    padding: 8,
  },
  counterButtonText: {
    color: 'white',
    fontSize: 24,
  },
  countsContainer: {
    margin: 5,
    minHeight: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    color: '#74808B',
    fontSize: 24,
    lineHeight: 36,
  },
  countValue: {
    margin: 5,
    color: '#192734',
    fontSize: 24,
    fontWeight: '900',
    lineHeight: 36,
  },
  counterCard: {
    marginVertical: 10,
    padding: 10,
  },
});

const {height} = Dimensions.get('window');
const MAX_TIME_SECOND = 60;

export default ({number, question, onAnswered = () => {}, value}) => {
  const [timer, setTimer] = useState(value ? 0 : MAX_TIME_SECOND);
  const [breathCount, setBreathCount] = useState(value || 0);
  const [intervalId, setIntervalId] = useState();
  const isFirstPress = timer === MAX_TIME_SECOND;
  const isTimeComplete = timer === 0;

  const startTimer = () => {
    return setInterval(() => setTimer(prevTime => prevTime - 1), 1000);
  };

  useEffect(() => {
    if (isTimeComplete) {
      clearInterval(intervalId);
      onAnswered(question, breathCount);
    }
  }, [timer]);

  const scrollViewRef = useRef();

  const onCounterPress = () => {
    if (isFirstPress) {
      setTimer(prevTime => prevTime - 1);
      setIntervalId(startTimer());
      scrollViewRef.current.scrollToEnd({animated: true});
    }
    Vibration.vibrate(200);
    setBreathCount(prevCount => prevCount + 1);
  };

  const onReset = () => {
    clearInterval(intervalId);
    setTimer(MAX_TIME_SECOND);
    setBreathCount(0);
  };

  const pressButtonMessage = isFirstPress
    ? t('breathCounterStart')
    : t('breathCounterAfterStart');

  return (
    <React.Fragment>
      <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
        <QuestionBase number={number} question={question} />
        <TextInput
          mode={'outlined'}
          keyboardType={'number-pad'}
          label=""
          placeholder={t(question.unit)}
          value={value ? value.toString() : undefined}
          onChangeText={text => onAnswered(question, parseInt(text))}
        />
        <View style={styles.container}>
          <TouchableNativeFeedback
            onPress={onCounterPress}
            disabled={isTimeComplete}>
            <View
              style={[
                styles.counterButton,
                isTimeComplete && {backgroundColor: '#BABABA'},
              ]}>
              <Text style={styles.counterButtonText}>{pressButtonMessage}</Text>
            </View>
          </TouchableNativeFeedback>
          <View style={styles.countsContainer}>
            {isTimeComplete ? (
              <Text style={styles.countText}>
                {t('result')} : {`${breathCount} ${t('bpm')}`}
              </Text>
            ) : (
              <View>
                <HorizontalComponent style={{width: '100%'}}>
                  <Text style={styles.countText}>Breaths</Text>
                  <Text style={[styles.countValue, {marginLeft: 'auto'}]}>
                    {breathCount}
                  </Text>
                </HorizontalComponent>
                <HorizontalComponent style={{width: '100%'}}>
                  <Text style={styles.countText}>{t('seconds')}</Text>
                  <Text style={[styles.countValue, {marginLeft: 'auto'}]}>
                    {timer < 10 ? `0${timer}` : timer}
                  </Text>
                </HorizontalComponent>
              </View>
            )}
          </View>
          <Button
            style={{marginVertical: 10}}
            contentStyle={{height: 50}}
            disabled={isFirstPress}
            color={'#E24C4C'}
            mode={'contained'}
            onPress={onReset}>
            {t('reset')}
          </Button>
        </View>
      </ScrollView>
    </React.Fragment>
  );
};
