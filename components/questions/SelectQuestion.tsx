import React, {useState} from 'react';
import {
    StyleSheet,
    TouchableNativeFeedback,
    View,
    ScrollView,
    Modal,
    Image,
    Dimensions
} from 'react-native';
import {Text, Icon} from 'react-native-paper';
import QuestionBase from './QuestionBase';
import questionTypes from '@/domain/questionTypes/QuestionType';
import {isDefined} from '@/domain/questions/utils';
import QuestionImage from './QuestionImage';
import get from 'lodash/get';
import {useTranslation} from 'react-i18next';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nonSelectedItem: {
        backgroundColor: '#F4F5F6',
        paddingHorizontal: 16,
        marginVertical: 8,
        marginRight: 8,
        minHeight: 50,
        borderRadius: 8,
        justifyContent: 'center',
        elevation: 2,
    },
    selectedItem: {
        backgroundColor: '#4A58DD',
        paddingHorizontal: 16,
        marginVertical: 8,
        marginRight: 8,
        minHeight: 50,
        borderRadius: 8,
        justifyContent: 'center',
        elevation: 2,
    },
    selectedAnswerText: {
        fontSize: 24,
        color: '#FFF',
    },
    nonSelectedAnswerText: {
        fontSize: 24,
        color: '#000',
    },
    imageBackground: {
        width: 50,
        height: 50,
        paddingHorizontal: 0,
    },
    thumbnail: {
        borderRadius: 8,
    },
    flexUp: {
        flex: 1,
        justifyContent: 'center',
    },
});

const Item = ({title, onPress, selectedAnswers, image}) => {
    const {t} = useTranslation();
    const isSelected = selectedAnswers.includes(title);
    const [modalVisible, setModalVisible] = useState(false);
    const totalWidthOfScreen = Dimensions.get('window').width;

    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Modal
                animationType={'fade'}
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>
                <TouchableNativeFeedback onPress={() => setModalVisible(false)}>
                    <View
                        style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                        <Image source={image} width={totalWidthOfScreen - 32}/>
                    </View>
                </TouchableNativeFeedback>
            </Modal>
            <View style={{flex: 1}}>
                <TouchableNativeFeedback onPress={() => onPress(title)}>
                    <View
                        style={[isSelected ? styles.selectedItem : styles.nonSelectedItem]}>
                        <Text
                            style={[
                                isSelected
                                    ? styles.selectedAnswerText
                                    : styles.nonSelectedAnswerText,
                            ]}>
                            {t(title)}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View
                style={[
                    isSelected ? styles.selectedItem : styles.nonSelectedItem,
                    styles.imageBackground,
                ]}>
                {image ? (
                    <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
                        <View style={styles.flexUp}>
                            <Icon source={image} size={50} style={styles.thumbnail}></Icon>
                        </View>
                    </TouchableNativeFeedback>
                ) : (
                    <TouchableNativeFeedback onPress={() => onPress(title)}>
                        <View style={styles.flexUp}></View>
                    </TouchableNativeFeedback>
                )}
            </View>
        </View>
    );
};

const isSingleSelect = question =>
    [questionTypes.singleChoice.key, questionTypes.boolean.key].includes(
        question.type.key,
    );

export default ({number,
                    question,
                    onAnswered = () => {},
                    value
                }) => {
    const answer = !isDefined(value)
        ? []
        : isSingleSelect(question)
            ? [value]
            : value;

    const onItemSelected = key => {
        if (isSingleSelect(question)) {
            onAnswered(question, key);
            return;
        }

        if (answer.includes(key)) {
            onAnswered(
                question,
                answer.filter(val => val !== key),
            );
            return;
        }

        onAnswered(question, answer.concat(key));
    };

    const RenderItem = ({item, index, image}) => {
        return (
            <Item
                question={question}
                key={index}
                title={item}
                onPress={onItemSelected}
                selectedAnswers={answer}
                image={image}
            />
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <QuestionBase number={number} question={question}/>
                {question.options.map((option, index) => {
                    return (
                        <RenderItem
                            key={index}
                            item={option}
                            image={get(question, 'optionImages.' + option)}
                        />
                    );
                })}
                <QuestionImage image={question.commonImage}/>
            </ScrollView>
        </View>
    );
};
