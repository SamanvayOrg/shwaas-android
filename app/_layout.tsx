import {Stack} from 'expo-router';
import '@/i18n';
import {t} from 'i18next';
import {Provider} from 'jotai';
import store from '@/atoms/atomStore';
import {
    DefaultTheme,
    PaperProvider,
} from 'react-native-paper';
import {Colors} from '@/constants/Colors';

const colors = Colors.light;

const theme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.background,
        accent: colors.accent,
    },
};

export default function RootLayout() {
    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <Stack>
                    <Stack.Screen
                        name="index"
                        options={{headerShown: false, title: 'Home'}}
                    />
                    <Stack.Screen
                        name="disclaimer"
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="language"
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="about"
                        options={{headerShown: true, title: 'About'}}
                    />

                    <Stack.Screen
                        name="questionnaire"
                        options={() => ({
                            title: t('questionnaire')
                        })}
                    />
                    <Stack.Screen
                        name="recommendations"
                        options={{title: t('recommendations')}}
                    />
                </Stack>
            </PaperProvider>
        </Provider>
    );
}
