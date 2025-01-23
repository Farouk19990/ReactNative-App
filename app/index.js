import {View , Text } from 'react-native';
import {useState} from 'react';
import {ScrollView,SafeAreaView} from 'react-native';
import {Stack , useRouter} from 'expo-router';
import {COLORS,icons, SIZES,images} from '../constants';
import ScreenHeaderBtn from '../components/ScreenHeaderBtn.js';
import Welcome from '../components/Welcome.js';
import Popularjobs from '../components/Popularjobs.js';
import Nearbyjobs from '../components/Nearbyjobs.js';


const Home = () =>{
    const router = useRouter();
    return (
        <SafeAreaView style={{flex :1,backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{headerStyle:{backgroundColor:COLORS.lightWhite},
        headerShadowVisible:false,
        headerLeft:()=>(<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />),
        headerRight:()=>(<ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />),
        headerTitle:""
        }}/>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex:1,padding:SIZES.medium}}>
                <Welcome></Welcome>
                <Popularjobs></Popularjobs>
                <Nearbyjobs></Nearbyjobs>
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}
export default Home;