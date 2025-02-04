import {View , Text ,TextInput,TouchableOpacity,Image,FlatList} from 'react-native';
import styles from './welcome.style';
import {icons, SIZES} from '../constants';
import { useState } from 'react';
import { useRouter } from 'expo-router';

const jobsTypes =["Full Time","Part Time","Remote"]
const Welcome = () =>{
    const router = useRouter();
    const [activeJobType,setActiveJoType] = useState('Full Time')
    return (
        <View>
            <View style={styles.container}>
             <Text style={styles.userName}>Hello Adrian</Text>
             <Text style={styles.welcomeMessage}>Find your perfect job</Text>
            </View>   

        <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
                <TextInput style={styles.searchInput} placeholder='Whats up'></TextInput>
               
            </View>
            <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
        <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage}/>
        </TouchableOpacity>
        </View>

        <View style={styles.tabsContainer}>
        <FlatList data={jobsTypes}
        renderItem={({item})=>(
            <TouchableOpacity style={styles.tab(activeJobType, item)}
            onPress={()=>{setActiveJoType(item);router.push(`/search/${item}`)}}
            >
                <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
            </TouchableOpacity>)
        }
        keyExtractor={item => item}
        contentContainerStyle={{columnGap:SIZES.small}}
        horizontal
        />
        </View>
        </View>
    )
}
export default Welcome;