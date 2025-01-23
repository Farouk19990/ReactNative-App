import {View , Text } from 'react-native';
import {useState} from 'react';
import {ScrollView,SafeAreaView} from 'react-native';
import {Stack , useRouter} from 'expo-router';
import {COLORS} from '../constants'
//import {Nearbyjobs, Popularjobs,ScreenHeaderBtn} from '../components/';
const Home = () =>{
    const router = useRouter();
    return (
        <SafeAreaView style={{flex :1,backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{headerStyle:{backgroundColor:COLORS.lightWhite},}}/>
        </SafeAreaView>
    )
}
export default Home;