import React from 'react';
import {StyleSheet,View, TouchableNativeFeedback, Dimensions} from 'react-native';
import QuestionBase from './QuestionBase';
import {Text, Button} from 'react-native-paper';

const styles = StyleSheet.create({
    container : {flexDirection: 'column'},
    counterButton : {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#F4F5F6',
        elevation: 2
    },
    counterButtonText : {
        color: 'black',
        fontSize:32
    },
    countsContainer: {
        margin: 5
    },
    countText: {
        margin: 5,
        fontSize: 24
    },
    resetSubmitContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop : 10

    },
    resetButton : {

    },
    submitButton : {

    }

});

const {height} = Dimensions.get('window');

export default ({
                    number,
                    question,
                    onAnswered = () => {}
                }) => {

    return (
        <View>
            <QuestionBase number={number} question={question}/>
            <View style={styles.container}>
                <TouchableNativeFeedback onPress={() => {}}>
                    <View style={[styles.counterButton, {height: height*0.3}]}>
                        <Text
                            style={styles.counterButtonText}>
                            Click here as you breathe out and then press on every breath
                        </Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={styles.countsContainer}>
                    <Text style={styles.countText}>Breaths : </Text>
                    <Text style={styles.countText}>Seconds : </Text>
                </View>
                <View style={styles.resetSubmitContainer}>
                    <Button
                        color="#d15434"
                        mode={'contained'}
                        onPress={() => {}}>
                        Reset
                    </Button>
                    <Button
                        color='#32d16c'
                        mode={'contained'}
                        onPress={() => {}}>
                        Submit
                    </Button>

                </View>

            </View>
        </View>



    );
};
