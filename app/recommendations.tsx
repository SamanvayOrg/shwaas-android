import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import Answers from '@/components/Answers';
import {Colors} from '@/constants/Colors';
import {useTranslation} from "react-i18next";
import {useAtomValue, useSetAtom} from "jotai";
import {recommendationsAtom} from "@/atoms/recommendations";
import {formAtom, startOverAction} from "@/atoms/form";
import {useNavigation} from 'expo-router';
import BottomButton from "@/components/common/BottomButton";
const colors = Colors.light;

const styles = StyleSheet.create({
    container: {flex: 1},
    contentContainer: {
        paddingHorizontal: 10,
        marginBottom: 80,
    },
    shortMessageContainer: {
        marginTop: 20,
        marginHorizontal: 10,
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 10,
        elevation: 2,
        borderRadius: 5,
    },
    shortMessageText: {
        fontSize: 40,
    },
    shortMessageTextContainer: {
        backgroundColor: '#EEF7F1',
        borderRadius: 8,
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    nextStepsContainer: {
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#EEF0F2',
        elevation: 2,
        borderRadius: 5,
    },
    buttonStyle: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderRadius: 0,
    },
});

export default () => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const recommendations = useAtomValue(recommendationsAtom);
    const {type, messages} = recommendations;
    const form = useAtomValue(formAtom);
    let onStartOver = useSetAtom(startOverAction);
    const goHome = () => navigation.navigate('index');

    const validMessages = messages.filter(
        message => message && message.length > 0,
    );
    let restart = () => {
        onStartOver();
        goHome();
    };
    return (
        <View style={styles.container}>
            <ScrollView style={styles.contentContainer}>
                <View
                    style={[
                        styles.shortMessageContainer,
                        {backgroundColor: type.shortMessageTextAndOuterBoxColor},
                    ]}>
                    <Text style={{color: '#EEF7F1', fontSize: 32}}>
                        {t(type.startingMessageKey)}
                    </Text>
                    <View style={styles.shortMessageTextContainer}>
                        <Text
                            style={[
                                styles.shortMessageText,
                                {color: type.shortMessageTextAndOuterBoxColor},
                            ]}>
                            {t(type.shortMessageKey)}
                        </Text>
                    </View>
                </View>
                <View style={styles.nextStepsContainer}>
                    <Text style={{textAlign: 'center', fontSize: 32}}>
                        {t('nextSteps')}
                    </Text>
                    <Text style={{fontSize: 18, color: colors.primary}}>
                        {t(type.nextSteps)}
                    </Text>
                    {validMessages.map((message, index) => (
                        <Text
                            style={{fontSize: 18, color: colors.primary, marginTop: 12}}
                            key={index}>
                            ⬤ {t(message)}
                        </Text>
                    ))}
                </View>
                <Answers form={form} />
            </ScrollView>
            <BottomButton
                icon="restart"
                onPress={restart}>
                {t('startOver')}
            </BottomButton>
        </View>
    );
};
