import React, {useEffect} from 'react';
import {Button, Text} from 'react-native-paper';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import Menu, {Menus} from '../components/Menu';
import {Colors} from '@/constants/Colors';
import {useNavigation} from 'expo-router';
import {Image} from "expo-image";
import { useTranslation } from "react-i18next";
import {useAtomValue, useSetAtom} from "jotai";
import {startOverAction} from "@/atoms/form";
import {languageAtom, disclaimerAcceptedAtom} from '@/atoms/settings';

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
    const { t } = useTranslation();
    const navigation = useNavigation();
    const {width, height} = Dimensions.get('window');
    const isPortrait = height > width;
    const dimensionOfImage = isPortrait ? width * 0.9 : height * 0.9;
    const opacity = isPortrait ? 0.8 : 0.1;

    const startOver = useSetAtom(startOverAction);
    const language = useAtomValue(languageAtom);
    const disclaimerAccepted = useAtomValue(disclaimerAcceptedAtom);

    useEffect(() => navigation.addListener('focus', startOver), []);

    const label = disclaimerAccepted
        ? 'getStarted'
        : language
            ? 'readDisclaimer'
            : 'selectLanguage';

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
            <Button
                icon="arrow-right"
                style={styles.buttonStyle}
                contentStyle={{width: '100%', height: 70, flexDirection: 'row-reverse'}}
                labelStyle={{fontSize: 20}}
                mode={'contained'}
                onPress={() => {
                    if (disclaimerAccepted) {
                        navigation.navigate('questionnaire');
                    } else if (language) {
                        navigation.navigate('disclaimer');
                    } else {
                        navigation.navigate('language');
                    }
                }}>
                {t(label)}
            </Button>
        </View>
    );
};

export default Home;
