import React from 'react';
import {Button, Text} from 'react-native-paper';
import {View} from 'react-native';
import BaseScreen from '../components/BaseScreen';
import HandShow from '../assets/handShow.svg'


export default ({navigation}) => (
    <React.Fragment><BaseScreen style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', color: '#2A4965', fontSize: 45, textAlign: 'center'}}>Welcome to Covid
            Calcuator</Text>
        <View>
            <HandShow height={600} width={600}/>
        </View>
    </BaseScreen>
        <Button
            icon = "arrow-right"
            style={{borderRadius:0}}
            contentStyle={{width: '100%', height:70, flexDirection: 'row-reverse'}}
            labelStyle={{fontSize:20}}
            color='#2A4965'
            mode={'contained'}
            onPress={() => {
                navigation.navigate('BasicDetails');
            }}>
            Get started
        </Button>
    </React.Fragment>
);
