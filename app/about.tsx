import React from 'react';
import {Linking, ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';

const AboutScreen = () => {
    return (
        <ScrollView>
            <View
                style={{
                    padding: 16,
                    backgroundColor: '#EEF0F2',
                }}>
                <View>
                    <Text style={{fontSize: 18}}>
                        Shwaas is an Android app that has been developed to guide people who
                        are experiencing covid-like symptoms. The app categorizes people
                        into three categories -
                    </Text>
                </View>

                <View>
                    <View style={{flexDirection: 'row', marginVertical: 8}}>
                        <View style={{width: 48}}>
                            <View
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: 18,
                                    backgroundColor: 'green',
                                }}/>
                        </View>
                        <View style={{minHeight: 24, flex: 1}}>
                            <Text style={{fontSize: 18}}>
                                Manage at home without consulting a doctor (Green)
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginVertical: 8}}>
                        <View style={{width: 48}}>
                            <View
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: 18,
                                    backgroundColor: 'yellow',
                                }}/>
                        </View>
                        <View style={{minHeight: 24, flex: 1}}>
                            <Text style={{fontSize: 18}}>Needs consultation (Yellow)</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginVertical: 8}}>
                        <View style={{width: 48}}>
                            <View
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: 18,
                                    backgroundColor: 'red',
                                }}/>
                        </View>
                        <View style={{minHeight: 24, flex: 1}}>
                            <Text style={{fontSize: 18}}>Needs admission (Red)</Text>
                        </View>
                    </View>
                </View>

                <View style={{marginTop: 16}}>
                    <Text style={{fontSize: 18}}>
                        The app takes into account existing symptoms, assists in examining
                        the person, and collects history of comorbidities to come up with
                        the final recommendations.
                    </Text>
                </View>

                <View style={{marginTop: 16}}>
                    <Text style={{fontSize: 18}}>
                        The primary purpose of this tool is to assist health workers and
                        volunteers in identifying people in their village who need referral.
                    </Text>
                </View>

                <View style={{marginTop: 16}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Next steps</Text>
                </View>
                <View>
                    <Text style={{fontSize: 18}}>1. Pictorial illustrations</Text>
                </View>
                <View>
                    <Text style={{fontSize: 18}}>2. Audio for those who cannot read</Text>
                </View>
                <View>
                    <Text style={{fontSize: 18}}>3. Children under 12</Text>
                </View>

                <View style={{marginTop: 16}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        Brought to you by
                    </Text>
                </View>
                <View>
                    <Text
                        style={{fontSize: 18}}
                        onPress={() => Linking.openURL('https://www.jssbilaspur.org/')}>
                        Jan Swasthya Sahyog - Development of the algorithm
                    </Text>
                </View>
                <View>
                    <Text
                        style={{fontSize: 18}}
                        onPress={() =>
                            Linking.openURL('https://www.samanvayfoundation.org/')
                        }>
                        Samanvay Foundation - Development of the app
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default AboutScreen;
