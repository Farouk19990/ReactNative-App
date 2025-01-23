import {View , Text ,TextInput,TouchableOpacity,Image,FlatList} from 'react-native';
import styles from './welcome.style';
import {icons, SIZES} from '../constants';
import { useState } from 'react';
import { useRouter } from 'expo-router';
const Welcome = () =>{
    const router = useRouter();
    return (
        <View>
            <View style={styles.container}>
             <Text style={styles.userName}>Hello Adrian</Text>
             <Text style={styles.WelcomeMessage}>Find your perfect job</Text>
            </View>   

        <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
                <TextInput style={styles.searchInput}></TextInput>
                <Text style={{ fontFamily: 'DMBold' }}>Hello World</Text>
            </View>
        </View>
        </View>
    )
}
export default Welcome;