import React, {useEffect} from 'react';
import {
    getRecommendation,
    indexOfQuestion,
    nextQuestion,
    previousQuestion,
    questionWithKey,
} from '@/domain/questionModel';
import Question from '../components/questions/Question';
import BaseScreen from '../components/common/BaseScreen';
import {BackHandler, View} from 'react-native';
import PrevNextNavigator from '../components/PrevNextNavigator';
import Breadcrumb from '../components/Breadcrumb';
import RecommendationType from '../domain/recommendations/recommendationType';
import ageTypes from '../domain/ageTypes';
import {useAtomValue, useSetAtom} from "jotai";
import {
    currentQuestionKeyAtom,
    formAtom,
    goToChosenQuestionAction,
    goToNextQuestionAction,
    goToPreviousQuestionAction,
    setValueAction
} from "@/atoms/form";
import {recommendationsAtom} from '@/atoms/recommendations';
import {useFocusEffect, useNavigation} from "expo-router";

const Questionnaire = () => {
    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                const hasPreviousQuestion = previousQuestion(form, currentQuestionKey);
                if (hasPreviousQuestion) {
                    goToPreviousQuestion();
                }

                return !!hasPreviousQuestion;
            };

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [form, currentQuestionKey]),
    );

    const form = useAtomValue(formAtom);
    const currentQuestionKey = useAtomValue(currentQuestionKeyAtom);
    const goToNextQuestion = useSetAtom(goToNextQuestionAction);
    const setValue = useSetAtom(setValueAction);
    const goToPreviousQuestion = useSetAtom(goToPreviousQuestionAction);
    const goToChosenQuestion = useSetAtom(goToChosenQuestionAction);
    const navigation = useNavigation();
    const setRecommendations = useSetAtom(recommendationsAtom);

    const goToNextQuestionIfNecessary = (question, value) => {
        const recommendation = getRecommendation(form, question, value);
        setRecommendations(recommendation);

        if (
            recommendation.type ===
            RecommendationType.AdmitInHospital(ageTypes.ageType(form)) ||
            recommendation.type ===
            RecommendationType.NotUseful(ageTypes.ageType(form))
        ) {
            navigation.navigate('recommendations');
            return;
        }

        if (nextQuestion(form, currentQuestionKey, value)) {
            goToNextQuestion();
        } else {
            navigation.navigate('recommendations');
        }
    };

    const question = questionWithKey(form, currentQuestionKey);
    if (!question) {
        return null;
    }

    useEffect(() => {
        if (question.type.isInformation) {
            setValue({key: question, value: question.value(form)});
        }
    }, [currentQuestionKey]);

    const value = form[question.key];

    const onAnswered = (question, value) => {
        setValue({key: question.key, value});
        if (question.type.isBoolean || question.type.isSingleChoice) {
            goToNextQuestionIfNecessary({question, value});
        }
    };

    return (
        <View style={{flex: 1, backgroundColor: '#fafafa'}}>
            <Breadcrumb
                form={form}
                currentIndex={indexOfQuestion(form, question)}
                onQuestionChange={goToChosenQuestion}
            />
            <BaseScreen style={{marginTop: 16}}>
                <Question
                    number={indexOfQuestion(form, question) + 1}
                    question={question}
                    value={value}
                    onAnswered={onAnswered}
                />
            </BaseScreen>
            <PrevNextNavigator
                onPrevious={goToPreviousQuestion}
                onNext={goToNextQuestionIfNecessary}
                firstPage={!previousQuestion(form, currentQuestionKey)}
                lastPage={false}
            />
        </View>
    );
};

export default Questionnaire;
