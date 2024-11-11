import React from 'react';
import {View} from 'react-native';
import LanguageSelection from '../components/LanguageSelection';
import {useNavigation} from "expo-router";
import {useTranslation} from "react-i18next";
import {languageAtom} from "@/atoms/settings";
import {useAtomValue} from "jotai";
import BottomButton from "@/components/common/BottomButton";

const LanguageSelectScreen = () => {
    const { t } = useTranslation();

    const language = useAtomValue(languageAtom);
    const navigation = useNavigation();

    const goHome = () => navigation.navigate('index');

    return (
        <View style={{flex: 1}}>
            <LanguageSelection/>
            <BottomButton disabled={!language} onPress={goHome}>
                {t('confirm')}
            </BottomButton>
        </View>
    );
};

export default LanguageSelectScreen;
