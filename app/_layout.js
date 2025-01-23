import {Stack} from 'expo-router';
import { useCallback } from 'react';
import {useFonts} from 'expo-font';
import * as SplachScreen from 'expo-splash-screen';
import { View } from 'react-native';
SplachScreen.preventAutoHideAsync();

const Layout = ()=> {
    const [fontLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })
    const onLayoutRootView = useCallback(async()=>{
        if(fontLoaded){
            await SplachScreen.hideAsync();
        }
    },[fontLoaded])
    if(!fontLoaded) return null;
    return <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
    <Stack />
  </View>;
}

export default Layout;