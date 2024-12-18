import React, {useEffect, useState} from 'react';
import {Text} from 'react-native-paper';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import Menu, {Menus} from '../components/Menu';
import {Colors} from '@/constants/Colors';
import {useNavigation} from 'expo-router';
import {Image} from "expo-image";
import {useTranslation} from "react-i18next";
import {useAtomValue, useSetAtom} from "jotai";
import {startOverAction} from "@/atoms/form";
import {disclaimerAcceptedAtom, languageAtom} from '@/atoms/settings';
import BottomButton from "@/components/common/BottomButton";

const colors = Colors.light;
const styles = StyleSheet.create({
    wrapper: {alignItems: 'center', backgroundColor: 'white', flex: 1},
    welcomeMessage: {
        color: colors.primary,
        fontSize: 24,
        textAlign: 'center',
        marginTop: 72,
    },
    title: {
        fontWeight: 'bold',
        color: colors.primary,
        fontSize: 45,
        textAlign: 'center',
    },
    subtitle: {
        color: colors.primary,
        fontSize: 32,
        textAlign: 'center',
        marginTop: 2,
    },
    pushDown: {marginTop: 'auto'},
    buttonStyle: {width: '100%', borderRadius: 0},
    subText: {
        color: '#74808B',
        fontWeight: '400',
        fontSize: 14,
        textAlign: 'center',
    },
});

const Home = () => {
    const {t} = useTranslation();
    const navigation = useNavigation();
    const {width, height} = Dimensions.get('window');
    const isPortrait = height > width;
    const dimensionOfImage = isPortrait ? width * 0.9 : height * 0.9;
    const opacity = isPortrait ? 0.8 : 0.1;

    const startOver = useSetAtom(startOverAction);
    const language = useAtomValue(languageAtom);
    const disclaimerAccepted = useAtomValue(disclaimerAcceptedAtom);

    useEffect(() => navigation.addListener('focus', startOver), []);
    let [label, setLabel] = useState<string>('readDisclaimer');
    let [nextRoute, setNextRoute] = useState<string>('disclaimer');

    useEffect(() => {
        setLabel(disclaimerAccepted
                ? 'getStarted'
                : language
                    ? 'readDisclaimer'
                    : 'selectLanguage');

        let nextRouteTemp;
        if (disclaimerAccepted) {
            nextRouteTemp = 'questionnaire';
        } else if (language) {
            nextRouteTemp = 'disclaimer';
        } else {
            nextRouteTemp = 'language';
        }
        setNextRoute(nextRouteTemp);
    }, [disclaimerAccepted, language]);

    return (
        <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={styles.wrapper} style={{flex: 1}}>
                <View style={{zIndex: 2}}>
                    <Text style={styles.welcomeMessage}>{t('welcome')}</Text>
                    <Text style={styles.title}>{t('title')}</Text>
                    <Text style={styles.subtitle}>{t('subTitle')}</Text>
                </View>
                <Image source={require('@/assets/images/handShow.svg')}
                       style={styles.pushDown}
                       height={dimensionOfImage}
                       width={dimensionOfImage}
                       opacity={opacity}
                       zIndex={1}
                />
            </ScrollView>
            <Menu
                onMenuSelected={menu => {
                    if (menu === Menus.language) {
                        navigation.navigate('language');
                    } else if (menu === Menus.about) {
                        navigation.navigate('about');
                    }
                }}
            />
            <BottomButton icon="arrow-right" onPress={() => { navigation.navigate(nextRoute)}}>
                {t(label)}
            </BottomButton>
        </View>
    );
};

export default Home;
