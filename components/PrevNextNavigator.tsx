import React from 'react';
import {Button, withTheme} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import {t} from 'i18next';

const styles = StyleSheet.create({
    wrapper: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
    },
    nextButton: {
        marginLeft: 'auto',
    },
    nextButtonContent: {
        height: 70,
        flexDirection: 'row-reverse',
    },
    previousButtonContent: {
        height: 70,
    },
    labelStyle: {
        fontSize: 20,
        lineHeight: 28
    },
    previousButton: {
        alignItems: 'flex-start',
    },
});

const Navigator = ({
                       theme,
                       onPrevious = () => {
                       },
                       onNext = () => {
                       },
                       firstPage,
                       lastPage,
                   }) => {
    return (
        <View
            style={[styles.wrapper, {backgroundColor: theme.colors.primary}]}>
            {!firstPage && (
                <Button
                    textColor={'white'}
                    icon={'arrow-left'}
                    style={styles.previousButton}
                    contentStyle={styles.previousButtonContent}
                    labelStyle={styles.labelStyle}
                    onPress={onPrevious}>
                    {t('previous')}
                </Button>
            )}
            {!lastPage && (
                <Button
                    textColor={'white'}
                    icon={'arrow-right'}
                    style={styles.nextButton}
                    contentStyle={styles.nextButtonContent}
                    labelStyle={styles.labelStyle}
                    onPress={onNext}>
                    {t('next')}
                </Button>
            )}
        </View>
    );
};

export default withTheme(Navigator);
