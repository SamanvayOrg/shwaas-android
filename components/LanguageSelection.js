import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {List} from 'react-native-paper';
import {Colors} from '@/constants/Colors';
import {languageOptions} from '@/i18n';
import {languageAtom} from '@/atoms/settings';
import {useAtom} from 'jotai';
import i18n from 'i18next';

const colors = Colors.light;

const styles = StyleSheet.create({
    commonItem: {
        marginTop: 10,
        borderRadius: 8,
        marginHorizontal: 10,
    },
    nonSelectedItem: {
        backgroundColor: '#F4F5F6',
        marginVertical: 8,
        paddingHorizontal: 16,
        minHeight: 50,
        borderRadius: 8,
        justifyContent: 'center',
        elevation: 2,
    },
    selectedItem: {
        backgroundColor: '#4A58DD',
        paddingHorizontal: 16,
        paddingLeft: 16,
        marginVertical: 8,
        minHeight: 50,
        borderRadius: 8,
        justifyContent: 'center',
        elevation: 2,
    },
    commonAnswerText: {
        fontSize: 30,
        alignSelf: 'center',
    },
    selectedAnswerText: {
        color: colors.contrastingTextColor,
    },
    nonSelectedAnswerText: {
        color: colors.regularTextColor,
    },
});

export default () => {
    const [language, setLanguage] = useAtom(languageAtom);
    const changeLanguage = (ln) => {
        setLanguage(ln);
        i18n.changeLanguage(ln);
    };

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{marginTop: 30, backgroundColor: colors.background}}>
            {languageOptions.map(lang => {
                let isSelected = lang.locale === language;
                return (
                    <List.Item
                        key={lang.locale}
                        title={lang.label}
                        style={[
                            styles.commonItem,
                            isSelected ? styles.selectedItem : styles.nonSelectedItem,
                        ]}
                        titleStyle={[
                            styles.commonAnswerText,
                            isSelected
                                ? styles.selectedAnswerText
                                : styles.nonSelectedAnswerText,
                        ]}
                        onPress={() => changeLanguage(lang.locale)}
                    />
                );
            })}
        </ScrollView>
    );
};
