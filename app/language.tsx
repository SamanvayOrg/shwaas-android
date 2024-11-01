import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import LanguageSelection from '../components/LanguageSelection';
import {useNavigation} from "expo-router";
import {useTranslation} from "react-i18next";
import {languageAtom} from "@/atoms/settings";
import {useAtomValue} from "jotai";

const styles = StyleSheet.create({
    contentStyle: {width: '100%', height: 70, flexDirection: 'row-reverse'},
    containerStyle: {width: '100%', borderRadius: 0},
});

const LanguageSelectScreen = () => {
    const { t } = useTranslation();

    const language = useAtomValue(languageAtom);
    const navigation = useNavigation();

    const goHome = () => navigation.navigate('index');

    return (
        <View style={{flex: 1}}>
            <LanguageSelection/>
            <Button
                disabled={!language}
                style={styles.containerStyle}
                contentStyle={styles.contentStyle}
                labelStyle={{fontSize: 20}}
                mode={'contained'}
                onPress={goHome}>
                {t('confirm')}
            </Button>
        </View>
    );
};

export default LanguageSelectScreen;
